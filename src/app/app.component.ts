import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { UsercardService } from './usercard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   private columns: Card[] = [];

   constructor(private userCard: UsercardService) { }

 ngOnInit(){
   this.columns = this.userCard.getColumns();
  //  console.log(this.columns);
    // for(let i=0; i<4; i++){
    //   this.columns[i] = null;
    // }
 }
 addList(){
  let listName = window.prompt("Add list name.");
  this.userCard.addListItem(listName);
 }
}
