import { Component, OnInit } from '@angular/core';
import { AromaticsComponent } from '../aromatics/aromatics.component';

@Component({
  selector: 'app-trigger-sort',
  templateUrl: './trigger-sort.component.html',
  styleUrls: ['./trigger-sort.component.css']
})



export class TriggerSortComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  yin(){
    console.log("function Yin appelée");
  }
  yang(){
    console.log("function Yang appelée");
  }
}
