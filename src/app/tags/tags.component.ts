import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Array<string>;

  private tagsSub;
   
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.tagsSub = this.service.getTags().subscribe(data => this.tags = data);
  }

  ngOnDestroy(){
    this.tagsSub.unsubscribe();
  }

}
