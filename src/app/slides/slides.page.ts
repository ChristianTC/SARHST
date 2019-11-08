import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  slides = [
    {
      img: 'Titulo 1',
      titulo: 'Esta es la pagina 1<br>page 1'
    },
    {
      img: 'Titulo 2',
      titulo: 'Esta es la pagina 2<br>page 3'
    },
    {
      img: 'Titulo 3',
      titulo: 'Esta es la pagina 3<br>page 3'
    }
  ];


  constructor(     
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  irTabs() {  
    this.navCtrl.navigateRoot('/tabs');
  }
}
