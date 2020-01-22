import { Component, OnInit, Input } from '@angular/core';
import { UsercardService } from '../usercard.service';
import { Card } from '../card';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  @Input() title: string;
  @Input() headColors: string;
  @Input() col: any;
  @Input() cardContent: any[] = [];

  private columnData: Card[];
  // private cardContent: any[] = [];
  private newArray: string[];

  constructor(private userCard: UsercardService) { }

  ngOnInit() {
    // this.columnData = this.userCard.getColumns();
    // console.log(this.columnData);
    
    // for(let content of this.columnData){
    //   this.cardContent.push(content.cardContent);
    // }
  }

  addCard(){
    let cardCon = window.prompt("Add card content.");
    this.cardContent.push(cardCon);
    // console.log(this.cardContent);
  }

  moveCardLeft(id){
    this.newArray = [...this.cardContent.splice(id, 1)];
    // console.log(this.newArray);
    this.userCard.addCard((this.col-1), this.newArray);
  }

  moveCardRight(id){
    this.newArray = [...this.cardContent.splice(id, 1)];
    // console.log(this.newArray);
    this.userCard.addCard((this.col+1), this.newArray);
  }

}
