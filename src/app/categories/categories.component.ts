import { Component, OnInit } from '@angular/core';
import { PostService } from '../post-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any>;

  private categoriesSub;
   
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.categoriesSub = this.service.getCategories().subscribe(data => this.categories = data);
  }

  ngOnDestroy(){
    this.categoriesSub.unsubscribe();
  }

}
