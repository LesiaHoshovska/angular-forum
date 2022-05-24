import {Component} from '@angular/core';
import {UserService} from "../../services/user-service/user.service";

@Component({
  selector: 'log-out-btn',
  templateUrl: 'log.out.btn.html',
  styleUrls: ['log.out.btn.css'],
  providers: [UserService]
})
export class LogOutBtnComponent {

  constructor(private userService: UserService) {
  }

  public logOut():void {
    this.userService.logout()
  }

}
