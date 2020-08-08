import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from './BlogPost';

const PER_PAGE = 6;
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
const apiUrl = 'https://web422-blog-api-ryniere.herokuapp.com/api';


@Injectable({
    providedIn: 'root'
  })
export class PostService {

    constructor(private http: HttpClient) { }

    getPosts(page, tag, category, perPage = PER_PAGE): Observable<BlogPost[]> {

        let tagQuery = tag ? `&tag=${tag}`:'';
        let categoryQuery = category ? `&category=${category}`:'';

        return this.http.get<BlogPost[]>(`${apiUrl}/posts?page=${page}&perPage=${perPage}${tagQuery}${categoryQuery}`);
    }

    getAllPosts():Observable<BlogPost[]> {
       
        return this.getPosts(1, null, null, Number.MAX_SAFE_INTEGER);
    }

    getPostbyId(id): Observable<BlogPost> {

        return this.http.get<BlogPost>(`${apiUrl}/posts/${id}`);
    }

    newPost(data: BlogPost): Observable<any> {

        return this.http.post<any>(`${apiUrl}/posts`, data);
    }

    updatePostById(id: string, data: BlogPost): Observable<any> {
        console.log(`${id} : ${data.title}`);
        return this.http.put<any>(`${apiUrl}/posts/${id}`, data);
    }

    deletePostById(id: string): Observable<any> {
        return this.http.delete<any>(`${apiUrl}/posts/${id}`);
    }

    getCategories(): Observable<any> {

        return this.http.get<any>(`${apiUrl}/categories`);
    }

    getTags(): Observable<string[]> {

        return this.http.get<string[]>(`${apiUrl}/tags`);

    }
}
