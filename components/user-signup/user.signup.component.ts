import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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
  selector: 'user-signup-component',
  templateUrl: 'user.signup.component.html',
  styleUrls: ['user.signup.component.css'],
})
export class UserSignUpComponent {
  public title: string = 'Welcome';
  public userName: string = 'Your name';
  public emailTitle: string = 'Email';
  public passTitle: string = 'Password';
  public btnTitle: string = 'SIGN UP';
  // @ts-ignore
  public userData: FormGroup;
  public hide: boolean = true;
  public loading: boolean = false;
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.userData = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.userData.controls; }


  public addUser():void {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.userData.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.userData.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../log-in'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}

