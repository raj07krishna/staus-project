import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ICard } from './card-design.model';

@Component({
  selector: 'app-card-design',
  templateUrl: './card-design.component.html',
  styleUrls: ['./card-design.component.scss']
})
export class CardDesignComponent implements OnInit, OnChanges {

  @Input() cardDetails!:ICard
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.cardDetails)
  }

  ngOnInit(): void {
  }

}
