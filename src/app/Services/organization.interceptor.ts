import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from './notification.service';


@Injectable()
export class OrganizationInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token')
    if(token){
    let updatedBody = {
      currentUserId: 101,
      username: "sikandar.waheed",
      data:[{
        ...request.body
      }]
      }
      const interceptedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
        body: updatedBody
      })
    console.log('Request Intercepted', interceptedRequest)

     return next.handle(interceptedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle different error statuses
        let errorMessage = this.handleError(error);
        this.notificationService.showError(errorMessage);
        return throwError(() => errorMessage);
      })
     )
  }else{
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = this.handleError(error);
        this.notificationService.showError(errorMessage);
        return throwError(() => errorMessage);
      })
    );
  }
  }

    // Error handling logic
    private handleError(error: HttpErrorResponse): string {
      let errorMessage = 'An unknown error occurred!';
  
      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        errorMessage = `Client-side error: ${error.error.message}`;
      } else {
        // Server-side error
        switch (error.status) {
          case 401:
            errorMessage = 'Bad Request: The request was invalid or cannot be served.';
            break;
          case 400:
            errorMessage = 'Unauthorized: Access is denied due to invalid credentials.';
            break;
          case 403:
            errorMessage = 'Forbidden: You do not have the necessary permissions.';
            break;
          case 404:
            errorMessage = 'Not Found: The requested resource could not be found.';
            break;
          case 500:
            errorMessage = 'Internal Server Error: The server encountered an issue.';
            break;
          case 503:
            errorMessage = 'Service Unavailable: The server is temporarily unable to process the request.';
            break;
          default:
            errorMessage = `Unexpected Error: ${error.message}`;
        }
      }
      return errorMessage;
  }
  }
