import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  user: User;

  constructor(
    private menu: MenuController, 
    private authService: AuthService,
    private newsService: NewsService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.user().subscribe(
      response => {
        console.log(response);
        this.user = response;
      }
    );
  }
}
