import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogPosts: Array<BlogPost>;
  page:number = 1;
  tag:string = null;
  category:string = null;
  querySub:any;
  
  constructor(private service: PostService, private route:ActivatedRoute){ }

  ngOnInit(): void {

    this.querySub = this.route.queryParams.subscribe(params => {
      if (params['tag']) {
        this.tag = params['tag'];
        this.category = null;
      } else {
        this.tag = null;
      }
      if (params['category']) {
        this.category = params['category'];
        this.tag = null;
      } else {
        this.category = null;
      }
      this.getPage(+params['page'] || 1);
    });
  }

  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }

  getPage(num:number) {

    this.service.getPosts(num, this.tag, this.category).toPromise().then(data => {

      if (data.length) {

        this.blogPosts = data;
        this.page = num;
      }

    });

  }

  changePage(newPage:number) {

    this.getPage(newPage);

  }

}
