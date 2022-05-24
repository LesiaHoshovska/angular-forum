import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.models";
import {UserService} from "../../services/user-service/user.service";

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  // @ts-ignore
  user: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.user = this.userService.getUserData()
    console.log(this.user.id)
  }

}
