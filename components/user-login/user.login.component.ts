import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
// import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/error-handler/alert.service';
import {UserService} from '../../services/user-service/user.service'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'user-login-component',
  templateUrl: 'user.login.component.html',
  styleUrls: ['user.login.component.css'],
})
export class UserLoginComponent implements OnInit{
  public cardTitle: string = 'Welcome'
  public emailTitle: string = 'Email'
  public passTitle: string = 'Password'
  public btnTitle: string = 'LOG IN'

  // @ts-ignore
  public userLoginData: FormGroup;
  public hide: boolean = true;
  public loading: boolean = false;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userLoginData = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.userLoginData.controls; }


  public logIn():void{
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.userLoginData.invalid) {
      return;
    }

    this.loading = true;
    this.userService.login(this.userLoginData.value)
      .subscribe({
        next: (data: any) => {
          if(data.status === 500){
            this.router.navigate([ `/log-in` ]);
          }
          this.router.navigate([ `/posts` ]);
        },
      });
  }
}

