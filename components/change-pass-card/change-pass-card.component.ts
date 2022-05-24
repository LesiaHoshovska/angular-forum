import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
// import { Store } from '@ngrx/store';
import { AlertService } from '../../services/error-handler/alert.service';
import {UserService} from '../../services/user-service/user.service'
import {EditUser} from "../../models/user.models";

@Component({
  selector: 'change-pass-card',
  templateUrl: './change-pass-card.component.html',
  styleUrls: ['./change-pass-card.component.css']
})
export class ChangePassCardComponent implements OnInit {
  public cardTitle: string = 'Change password'
  public btnTitle: string = 'SUBMIT'
  public user: EditUser = this.userService.getUserData();

  // @ts-ignore
  public changePassForm: FormGroup;
  public hide: boolean = true;
  public loading: boolean = false;
  public submitted: boolean = false;

  constructor( private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              private userService: UserService,) { }

  ngOnInit() {
    this.changePassForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  get f() { return this.changePassForm.controls }

  public changePass(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.userService.updatePass( id, this.changePassForm.value )
      .subscribe({
        next: (data: any) => {
          if(data.status === 500){
            this.router.navigate([ `change-password/:id` ]);
          }
          this.router.navigate([ `/posts` ]);
        },
      });
  }
}
