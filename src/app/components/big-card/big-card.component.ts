import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  fotoPrincipal:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescricao:string = ""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
