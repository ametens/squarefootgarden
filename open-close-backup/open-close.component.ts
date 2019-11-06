import { Component, OnInit } from '@angular/core';
import { state, style, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
})

export class OpenCloseComponent implements OnInit {

  public isOpen:boolean;

  constructor() { }
  
  toggle() { this.isOpen = !this.isOpen; }
  ngOnInit() {  }

}  