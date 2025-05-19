import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };
  constructor(private apiService: ApiService, private router: Router) { }

  cadastrar() {
    this.apiService.register(this.usuario.nome, this.usuario.email, this.usuario.senha).subscribe(
      (res: any) => {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('Erro ao cadastrar usuário');
      }
    );
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
