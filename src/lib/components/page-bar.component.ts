import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'fs-page-bar',
  templateUrl: './page-bar.component.html',
})
export class PageBarComponent implements OnInit {
  constructor(private store: Store) {

  }
  ngOnInit(): void {
  }

}
