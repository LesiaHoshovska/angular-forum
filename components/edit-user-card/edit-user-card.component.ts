import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AlertService } from '../../services/error-handler/alert.service';
import {UserService} from '../../services/user-service/user.service'
import {EditUser} from "../../models/user.models";
import {Observable} from "rxjs";

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'edit-user-card',
  templateUrl: './edit-user-card.component.html',
  styleUrls: ['./edit-user-card.component.css']
})
export class EditUserCardComponent implements OnInit {
  public title: string = 'Edit your info';
  public userName: string = 'Your name';
  public emailTitle: string = 'Email';
  public btnTitle: string = 'Update';
  // @ts-ignore
  public editUserData: FormGroup ;
  public hide: boolean = true;
  public loading: boolean = false;
  public submitted: boolean = false;
  // public user: EditUser = this.userService.getUserData();
  // public userId: string = this.user.id;


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private alertService: AlertService,
              public userService: UserService) { }


  ngOnInit() {
    this.getUserInfo()
  }


  getUserInfo(): void {
    const id = this.userService.getUserData().id;
    console.log(id)
    this.userService.getById(id)
      .subscribe(user =>  this.editUserData = this.formBuilder.group({
          name: [user.name, Validators.required],
          email: [user.email, Validators.required],
        }));
  }

  updateUser(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.userService.updateUserInfo(id, this.editUserData.value).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigate(['/posts']);
      }
    })
  }

}
