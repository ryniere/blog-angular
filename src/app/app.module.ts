import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostDataComponent } from './post-data/post-data.component';
import { PagingComponentComponent } from './paging-component/paging-component.component';
import { FooterPostsComponentComponent } from './footer-posts-component/footer-posts-component.component';
import { PostsTableComponentComponent } from './posts-table-component/posts-table-component.component';
import { EditPostComponentComponent } from './edit-post-component/edit-post-component.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PagingComponentComponent,
    FooterPostsComponentComponent,
    PostsTableComponentComponent,
    EditPostComponentComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
