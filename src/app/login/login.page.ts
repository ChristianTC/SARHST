import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
/*
  onSubmit() {
    this.authService.login(this.f.value).subscribe(
      () => {
        this.authService.userData().subscribe();
        this.router.navigate(['tabs']).then();
      },
      (errorResponse: HttpErrorResponse) => {console.log(errorResponse); }
    );
  }
*/
}
