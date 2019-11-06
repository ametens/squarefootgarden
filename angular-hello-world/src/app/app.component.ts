import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  articles = ['Book & Library URL reference','element2','element3','element4','element5','element6','element7','element8','element9','element10'];  
  mySize = 15;
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`{Adding article:  title ${title.value} / link ${link.value} }`);
    return false;   
  }
}
