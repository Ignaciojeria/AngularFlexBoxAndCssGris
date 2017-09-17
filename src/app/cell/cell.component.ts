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
  
  private size:number=4;

  private state= new BehaviorSubject<fieldState>(new Array(this.size).fill(null).map(_=>new Array(this.size).fill(null)));

  private add2inRamdomCell():void{
    
    let field = this.state.value;

    let one=Math.floor(Math.random()* this.size);
    let two=Math.floor(Math.random()* this.size);
  for (var i = 0; i < field.length; i++) {
    for (var z = 0; z < field.length; z++) {
      if(this.state.value[i][z]===null){
        if(this.state.value[one][two]==2){
          this.state.value[i][z]=2;
          return;
        }
        this.state.value[one][two]=2;
        console.log("paso");
        return;
      }
    } 
  }
    /* 
    field.forEach((row,rowIndex) => {
      row.forEach((tile,tileIndex) =>{
        if(this.state.value[rowIndex][tileIndex]===null){
          this.state.value[one][two]=2;
          console.log("paso");
        }
      });
    }
  );*/
  }



  constructor() { }


  ngOnInit() {
    console.log(this.state.value);

  }

}
