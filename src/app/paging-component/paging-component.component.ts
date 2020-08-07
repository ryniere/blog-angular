import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging-component',
  templateUrl: './paging-component.component.html',
  styleUrls: ['./paging-component.component.css']
})
export class PagingComponentComponent implements OnInit {

  @Input() page: number;
  @Output() newPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    console.log('new page')
    this.newPage.emit(this.page + 1);
  }

  previousPage() {
    if (this.page > 1) {
      this.newPage.emit(this.page - 1);
    }

  }

}
