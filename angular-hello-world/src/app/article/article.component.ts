import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { Article } from "./article.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {

  articles: Article[];

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  // article: Article;
  votes : number;
  title : string;
  link : string;

  constructor() {
    this.articles = [
      new Article("Pallets, square foot garden, how to?", "http://www.veggieworld.be/:title",5),
      new Article("5 ways to square the world with your veggies", "#details", 2),
      new Article("Veggie World, square the world with your veggies!", "#details", 3),
      new Article("Important things to know how to have bigger veggies in natural way", "#details", 1)
    ];
 
   }

   voteUp(): boolean{
     this.article.votes += 1;
     return false;
   }
   voteDown(): boolean{
     this.article.votes -= 1;
     return false;
   }

  ngOnInit() {
  }

}
