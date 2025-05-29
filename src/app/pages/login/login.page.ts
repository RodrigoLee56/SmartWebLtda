import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  senha = '';

  constructor(private readonly apiService: ApiService, private readonly router: Router) {}

  login() {
    this.apiService.login(this.email, this.senha).subscribe({
      next: (res: any) => {
        console.log('Resposta do login:', res);
        if (res.user) {
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/home']);
        } else {
          alert(res.error);
        }
      },
      error: (err) => {
        alert('Erro ao conectar com a API');
      }
    });
  }
}
