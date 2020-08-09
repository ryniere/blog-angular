import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { Comment } from '../Comment';
import { PostService } from '../post-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  blogPost : BlogPost;
  querySub:any;
  commentName: string;
  commentText: string;

  constructor(private service: PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.querySub = this.route.params.subscribe(params =>{
      this.service.getPostbyId( params['id'] ).toPromise().then(data => {
        this.blogPost = data;
        this.blogPost.views += 1; 
        this.service.updatePostById(this.blogPost._id, this.blogPost).subscribe();
      });
     });

  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

  onSubmitComment(): void {

    let comment = new Comment();
    comment.author =  this.commentName;
    comment.comment =  this.commentText;
    comment.date =  new Date().toLocaleDateString();

    console.log(comment.comment);

    this.blogPost.comments.push(comment);

    this.service.updatePostById(this.blogPost._id, this.blogPost).toPromise().then( () => {
      this.commentName = '';
      this.commentText = '';
    });

  }

}



