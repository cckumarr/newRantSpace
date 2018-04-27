import { Component, OnInit } from '@angular/core';
import { Rants } from '../rants';
import { RANTS } from '../mock-rants';

@Component({
  selector: 'app-rants',
  templateUrl: './rants.component.html',
  styleUrls: ['./rants.component.css']
})

export class RantsComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }

}
