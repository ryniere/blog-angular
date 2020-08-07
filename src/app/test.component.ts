import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    @Output() btnClicked = new EventEmitter();

    btnOneClicked() {
        this.btnClicked.emit("Button One Clicked");
    }

    constructor() { }

    ngOnInit() {

    }
}

<button (click)="btnOneClicked()">Button One</button>


import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './prent.component.html',
    styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


    logClick(msg){
        console.log(msg);
     }

    constructor() { }

    ngOnInit() {

    }
}
<app-child (btnClicked)="logClick($event)"></app-child>




getLivePosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
}


posts: Array<Post>;

private livePostsSub;

ngOnInit(){
    this.livePostsSub = this.data.getLivePosts().subscribe(data => this.posts = data);
}