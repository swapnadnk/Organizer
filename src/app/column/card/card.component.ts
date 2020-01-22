import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { UsercardService } from 'src/app/usercard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardContent: string;
  @Input() id: any;
  @Output('leftClick') leftClick = new EventEmitter<string>();
  @Output('rightClick') rightClick = new EventEmitter<string>();
  private cardLen: number;

  constructor(private userCard: UsercardService) { }

  ngOnInit() {
    this.cardLen = this.userCard.getColumns().length;
  }

  moveLeft(){
    this.leftClick.emit('');
  }

  moveRight(){
    this.rightClick.emit('');
  }

}
