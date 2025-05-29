import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

interface Produto {
  id: number | null;
  nome: string;
  descricao: string;
  preco: number | null;
}

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.page.html',
  styleUrls: ['./excluir-produto.page.scss'],
  standalone: false
})
export class ExcluirProdutoPage {
  produto: Produto = {
    id: null,
    nome: '',
    descricao: '',
    preco: null
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly apiService: ApiService
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produto.id = parseInt(id);
    }
  }

  excluir() {
    if (this.produto.id === null) {
      alert('ID do produto inválido.');
      return;
    }
    if (confirm(`Tem certeza que deseja excluir este "${this.produto.nome}"?`)) {
      this.apiService.deleteProduct(this.produto.id).subscribe(() => {
        alert('Produto excluído com sucesso!');
        this.router.navigate(['/home']);
      }, error => {
        alert('Erro ao excluir produto.');
      });
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
