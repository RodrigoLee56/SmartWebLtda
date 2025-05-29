import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage {

  produtos: any[] = [];
  page = 1;

  constructor(private readonly apiService: ApiService, private readonly router: Router) {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts(this.page).subscribe((res: any) => {
      this.produtos = res;
    });
  }
  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.apiService.deleteProduct(id).subscribe({
        next: () => {
          alert('Produto excluído com sucesso!');
          this.carregarProdutos();
        },
        error: (error) => {
          alert('Erro ao excluir produto.');
        }
      });
    }
  }
  carregarProdutos() {
    this.apiService.getProducts().subscribe((produtos: any) => {
      this.produtos = produtos;
    });
  }
  nextPage() {
    this.page++;
    this.loadProducts();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadProducts();
    } else {
      console.warn('Não é possível ir para página anterior');
    }
  }

  goToCadastroProduto(): void {
    this.router.navigate(['/cadastro-produto']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
}
