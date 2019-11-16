import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }
  ngOnInit() {
  }
  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }
  // On Login button tap, dismiss Register modal and open login Modal
  /*async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }*/
  irRegister() {  
    this.navCtrl.navigateRoot('/register');
  }
  irLogin() {  
    this.navCtrl.navigateRoot('/login');
  }
  register(form: NgForm) {
    console.log(form.value.first_name);
    console.log(form.value.last_name);
    console.log(form.value.dni);
    console.log(form.value.email);
    console.log(form.value.password);
    console.log(form.value.password2);
    console.log(form.value.gender);
    console.log(form.value.city);
    console.log(form.value.birthDate);

    //var str="wdwdwdfewfewfwefew";
    //console.log(str);
    //console.log(str.substring(2,5));

    var birthdate = form.value.birthDate.substring(0,10);
    console.log(birthdate);

    if(form.value.password==form.value.password2)
    {

      this.authService.register(
        
        form.value.first_name,
        form.value.last_name,
        form.value.dni,
        form.value.email,
        form.value.password,
        form.value.gender,
        form.value.city,
        birthdate
        //form.value.birthDate
        
        ).subscribe(
        data => {
          this.authService.login(form.value.email, form.value.password).subscribe(
            data => {
            },
          error => {
            console.log(error);
          },
          () => {
            this.dismissRegister();
            this.navCtrl.navigateRoot('/login');
          }
          );
          //this.alertService.presentToast(data['message']);
        },
        error => {
          console.log(error);
        },
        () => {
          
        }
      );
    }
    else {
      console.log("Las contrasenas no son iguales");
    }
  }
}