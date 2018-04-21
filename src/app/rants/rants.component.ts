import { Component, OnInit } from '@angular/core';
import { Rant } from '../rants';

@Component({
  selector: 'app-rants',
  templateUrl: './rants.component.html',
  styleUrls: ['./rants.component.css']
})

export class RantsComponent implements OnInit {

  rant: Rant = {
    id: 1,
    likes: 10,
    rantmsg: 'this is a rant'
  }



  constructor() { }

  ngOnInit() {
  }

}
