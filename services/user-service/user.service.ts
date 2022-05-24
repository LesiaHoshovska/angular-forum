import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import jwt_decode from "jwt-decode";

import { environment } from '../../../environments/environment'
import {User, EditUser, LoginUser, UserPass} from '../../models/user.models';
import {HandleError, HttpErrorHandler,} from "../error-handler/http-error-handler.service";



@Injectable({ providedIn: 'root' })
export class UserService {
  // public user: Observable<User>;
  public handleError: HandleError;

  constructor(
    private router: Router,
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler,
  ) {
    // // @ts-ignore
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }

  // public get userValue(): User {
  //   return this.userSubject.value;
  // }

  public getUserData(): User{
    const token = localStorage.getItem('token')
    // @ts-ignore
    const user = jwt_decode(token);
    // @ts-ignore
    console.log(user)
    // @ts-ignore
    return user
  }

  login(user: User) {
    return this.http.post<User>(`${environment.API_URL_USERS}/login`, user)
      .pipe(map(data => {
        // store jwt token in local storage to keep user logged in between page refreshes
        // @ts-ignore
        localStorage.setItem('token', data);
        return data;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('token');
    // @ts-ignore
    this.router.navigate(['/log-in']);
  }

  register(user: User) {
    return this.http.post(`${environment.API_URL_USERS}`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${environment.API_URL_USERS}`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.API_URL_USERS}/${id}`);
  }

  updateUserInfo(id: string, user: EditUser): Observable<EditUser> {
    console.log(id)
    console.log(user)
    const url = `${environment.API_URL_USERS}/${id}`;
    console.log(url)
    return this.http.put<EditUser>( url, user, )
      .pipe(
        catchError(this.handleError( 'updateUser', user))
      );
  }

  updatePass(id: string, password: UserPass): Observable<UserPass> {
    const url = `${environment.API_URL_USERS}/${id}/change-password`;
    // httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'my-new-auth-token');
    // @ts-ignore
    return this.http.put<UserPass>(url, password)
      .pipe(
        catchError(this.handleError('updatePass', password))
      );
  }

  delete(id: string) {
    return this.http.delete(`${environment.API_URL_USERS}/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
         {
          this.logout();
        }
        return x;
      }));
  }
}

