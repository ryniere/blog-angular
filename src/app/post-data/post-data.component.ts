import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../BlogPost';
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

  constructor(private service: PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.querySub = this.route.params.subscribe(params =>{
      this.service.getPostbyId( params['id'] ).toPromise().then(data => {
        this.blogPost = data});
     })

  }

  ngOnDestroy(): void {
    if(this.querySub) this.querySub.unsubscribe();
  }

}



