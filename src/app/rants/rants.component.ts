import { Component, OnInit } from '@angular/core';
import { Rants } from '../rants';
import { RANTS } from '../mock-rants';

@Component({
  selector: 'app-rants',
  templateUrl: './rants.component.html',
  styleUrls: ['./rants.component.css']
})

export class RantsComponent implements OnInit {

  rants= RANTS;

  onSelect(rant:Rants){
    this.rants.likes = rant.likes++;
  }

  constructor() { }

  ngOnInit() {
  }

  onRant(rantInput:string){
  	this.rants.push({
  		id : 654,
  		likes : 0,
  		rantMsg : rantInput
  	})
  }

}
