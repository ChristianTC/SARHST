import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/new';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  news: New;

  constructor(
    private menu: MenuController, 
    private authService: AuthService,
    private newsService: NewsService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.newsService.getNews().subscribe(
      news => {
        console.log(news["results"]);
        this.news = news["results"];
      }
    );
  }
}
