import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  // On Register button tap, dismiss login modal and open register modal
  /*async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }*/
  login(form: NgForm) {
    console.log(form.value.email);
    console.log(form.value.password);
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        //this.alertService.presentToast("Logged In");
      },
      error => {
        console.log(error);
      },
      () => {
        //this.dismissLogin();
        this.navCtrl.navigateRoot('/slides');
      }
    );
  }
  irRegister() {  
    this.navCtrl.navigateRoot('/register');
  }
  irLogin() {  
    this.navCtrl.navigateRoot('/login');
  }
}