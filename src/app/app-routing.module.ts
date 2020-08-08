import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PostsTableComponentComponent } from './posts-table-component/posts-table-component.component';
import { EditPostComponentComponent } from './edit-post-component/edit-post-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [{path: 'home', component: HomeComponent},  
                        {path: 'blog', component: BlogComponent},
                        {path: 'post/:id', component: PostComponent},
                        {path: 'admin', component: PostsTableComponentComponent},
                        {path: 'admin/:id', component: EditPostComponentComponent},
                        {path: '', redirectTo: '/home', pathMatch: 'full'},
                        {path: '404', component: PageNotFoundComponent},
                        {path: '**', redirectTo: '/404'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
