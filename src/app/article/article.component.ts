import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:'row'
  }
})
export class ArticleComponent implements OnInit {
  //votes: number;
  //title: string;
  //link: string;
  @Input() article: Article;
  constructor() {
    //this.title='xxxxx';
    //this.link="http://www.baidu.com" ;
    //this.votes=10;
    this.article = new Article('xxx','http://www.baidu.com',10);
  } 

  voteUp(){
    this.article.voteUp();
    return false;
  }

  voteDown(){
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
