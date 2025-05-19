import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
  standalone: false
})
export class CadastroProdutoPage {

  produto = {
    nome: '',
    descricao: '',
    preco: '',
    usuario_id: 1,
  };
  imagem: File | null = null;

  constructor(private apiService: ApiService, private router: Router) { }

  onFileChange(event: any) {
    this.imagem = event.target.files[0];
  }

  cadastrar() {
    if (!this.imagem) {
      alert('Selecione uma imagem');
      return;
    }

    const formData = new FormData();
    formData.append('nome', this.produto.nome);
    formData.append('descricao', this.produto.descricao);
    formData.append('preco', this.produto.preco);
    formData.append('usuario_id', this.produto.usuario_id.toString());
    formData.append('imagem', this.imagem, this.imagem.name);

    this.apiService.createProduct(formData).subscribe(
      (res: any) => {
        alert('Produto cadastrado com sucesso!');
        this.router.navigate(['/home']);
      },
      (err) => {
        alert('Erro ao cadastrar produto');
      }
    );
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
