import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(private router: Router) {}

  goHome(){
    let token = localStorage.getItem('token');
    if(token){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate([''])
    }
  }
}
