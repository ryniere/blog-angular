import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service';

@Component({
  selector: 'app-posts-table-component',
  templateUrl: './posts-table-component.component.html',
  styleUrls: ['./posts-table-component.component.css']
})
export class PostsTableComponentComponent implements OnInit {

  blogPosts : Array<BlogPost>;

  constructor(private service: PostService, private router: Router) { }

  ngOnInit(): void {

    this.service.getAllPosts().toPromise().then(data => {
      if (data.length > 0) {
        this.blogPosts = data;
      }
    });

  }

}
