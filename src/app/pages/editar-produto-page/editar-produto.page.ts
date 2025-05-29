import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto, ProdutoFormData } from 'src/app/models/produto.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
  standalone: false
})
export class EditarProdutoPage {
  produto: ProdutoFormData = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    usuario_id: 0,
    novaImagem: null
  };

  imagem: File | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getProductById(parseInt(id)).subscribe((data: Produto) => {
        this.produto.id = data.id;
        this.produto.nome = data.nome;
        this.produto.descricao = data.descricao;
        this.produto.preco = data.preco;
        this.produto.usuario_id = data.usuario_id;
        this.produto.novaImagem = data.imagem ? new File([], '') : null;
      });
    }
  }


  onFileChange(event: any) {
    this.imagem = event.target.files[0];
  }

  salvar() {
    if (!this.produto.nome || !this.produto.preco || !this.produto.usuario_id) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const formData = new FormData();
    formData.append('nome', this.produto.nome);
    formData.append('descricao', this.produto.descricao || '');
    formData.append('preco', this.produto.preco.toString());
    formData.append('usuario_id', this.produto.usuario_id.toString());

    if (this.produto.novaImagem) {
      formData.append('imagem', this.produto.novaImagem);
    }

    this.apiService.updateProduct(formData).subscribe({
      next: () => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erro ao atualizar:', err);
        alert('Erro ao atualizar produto.');
      }
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
