import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TitleService } from '../title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login')
  }

  onSubmit(loginForm: NgForm) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    this.authService.login(email, password).subscribe((response: any) => {
      localStorage.setItem('token', response.access_token);
      this.router.navigate(['/paneles']);
    });
  }

}
