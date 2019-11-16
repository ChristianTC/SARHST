import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from 'src/app/services/carousel.service';
import { AuthService } from 'src/app/services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  carousels: Carousel;
  carousels2: Carousel;

  constructor(
    private menu: MenuController, 
    private authService: AuthService,
    private carouselService: CarouselService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.carouselService.getCarousels().subscribe(
      carousel => {
        let entry;
        console.log(carousel["results"]);
        for ( entry of carousel["results"]) {
          console.log(entry["show"]); // 1, "string", false
        }
        console.log(entry);

        this.carousels = carousel["results"];
      }
    );
  }

}
