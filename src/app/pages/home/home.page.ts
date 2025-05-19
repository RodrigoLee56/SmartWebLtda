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

  constructor(private apiService: ApiService, private router: Router) {
    this.loadProducts();
  }

  loadProducts() {
    this.apiService.getProducts(this.page).subscribe((res: any) => {
      this.produtos = res;
    });
  }

  nextPage() {
    this.page++;
    this.loadProducts();
  }

  prevPage() {
    this.page--;
    this.loadProducts();
  }

  goToCadastroProduto(): void {
    this.router.navigate(['/cadastro-produto']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
