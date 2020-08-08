import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {

  blogPost : BlogPost;
  tags : string;

  constructor(private service: PostService, private router: Router) { }

  ngOnInit(): void {
    console.log('RYniere NewPostComponentComponent')
  }

  onSubmit(): void {

    this.blogPost.tags = this.tags.split(",").map(tag => tag.trim());

    this.service.newPost(this.blogPost).toPromise().then( () => this.router.navigate(['/admin']));

  }

}
