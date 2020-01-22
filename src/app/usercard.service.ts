import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';
import { CardComponent } from './column/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class UsercardService {
  private columns: Card[] = [
    {
    name: "ON HOLD",
    color: "#8E6E95",
    cardContent: ['Card content1', 'Card content2']
    },{
    name: "TODO",
    color: "#39A59C",
    cardContent: ['Card content3', 'Card content4']
    },{
    name: "IN-PROGRESS",
    color: "#344759",
    cardContent: ['Card content5', 'Card content6']
    },{
    name: "DONE",
    color: "#E8741E",
    cardContent: ['Card content7', 'Card content8']
  }
];

  constructor() { }

  getColumns(){
    return this.columns;
  }

  addCard(colNum, cardContent){
    this.columns[colNum].cardContent.push(cardContent);
  }
  
  addListItem(listName){
    let newcolor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(newcolor);
    let newCard = {name: listName, color: newcolor, cardContent: []};
    this.columns.push(newCard);
  }

}
