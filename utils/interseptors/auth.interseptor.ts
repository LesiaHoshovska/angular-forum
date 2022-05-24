import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    console.log(token)
    const updatedRequest = req.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    return next.handle(updatedRequest);


    //   // @ts-ignore
    //   return response.pipe(map((httpResponse: HttpResponse<any>)=>{
    //     return httpResponse
    //   }))
    // }
  }
}









// import { Injectable } from "@angular/core";
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpErrorResponse
// } from "@angular/common/http";
// import { throwError, Observable, BehaviorSubject, of } from "rxjs";
// import { catchError, filter, finalize, take, switchMap } from "rxjs/operators";
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = localStorage.getItem('token');
//
//     if (token) {
//       // If we have a token, we set it to the header
//       request = request.clone({
//         setHeaders: {Authorization: `Bearer${token}`}
//       });
//     }
//
//     return next.handle(request).pipe(
//       catchError((err) => {
//         if (err instanceof HttpErrorResponse) {
//           if (err.status === 401) {
//             // redirect user to the logout page
//           }
//         }
//         return throwError(err);
//       })
//     )
//   }
// }
