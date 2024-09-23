import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService, private messageService: MessageService) {}


  // Show a message to the user
  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({severity, summary, detail});
  }

  login() {
    let formData = {
      email: this.email,
      password: this.password
    }
    this.authService.login(formData).subscribe((res)=>{
      if(res){
        localStorage.setItem('token', JSON.stringify(res));
        this.router.navigate(['/home']);
      }
    })
  }
}
