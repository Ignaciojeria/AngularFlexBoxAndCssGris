import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export type fieldState = number[][];

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  private state= new BehaviorSubject<fieldState>(new Array(4).fill(new Array(4).fill(new Array(null))));

  constructor() { }

  ngOnInit() {
    console.log(this.state.value);
  }

}
