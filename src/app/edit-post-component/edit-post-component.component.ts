import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service';

@Component({
  selector: 'app-edit-post-component',
  templateUrl: './edit-post-component.component.html',
  styleUrls: ['./edit-post-component.component.css']
})
export class EditPostComponentComponent implements OnInit {

  blogPost : BlogPost;
  tags : string;
  querySub:any;

  constructor(private service: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.querySub = this.activatedRoute.params.subscribe(params =>{
      this.service.getPostbyId( params['id'] ).toPromise().then(data => {
        this.blogPost = data
        this.tags =  this.blogPost.tags.toString(); 
      });
     });
  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

  onSubmit(): void {

    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());

    this.service.updatePostById(this.blogPost._id, this.blogPost).toPromise().then( () => this.router.navigate(['/admin']));

  }

  onDelete(): void {

    this.service.deletePostById(this.blogPost._id).toPromise().then( () => this.router.navigate(['/admin']));

  }

}
