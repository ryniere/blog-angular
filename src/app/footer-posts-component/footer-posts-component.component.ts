import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service';

@Component({
  selector: 'app-footer-posts-component',
  templateUrl: './footer-posts-component.component.html',
  styleUrls: ['./footer-posts-component.component.css']
})
export class FooterPostsComponentComponent implements OnInit {

  blogPosts : Array<BlogPost>;

   constructor(private service: PostService){ }

  ngOnInit(): void {

    this.service.getPosts(1, null, null).toPromise().then(data => {
      if (data.length > 0) {
        this.blogPosts = data.slice(0,3);
      }

    });

  }

}
