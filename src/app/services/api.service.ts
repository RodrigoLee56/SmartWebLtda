import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) { }

  login(email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/login.php`, { email, senha });
  }

  register(nome: string, email: string, senha: string) {
    return this.http.post(`${this.apiUrl}/register.php`, { nome, email, senha });
  }

  getProducts(page: number = 1) {
    return this.http.get(`${this.apiUrl}/list_products.php?page=${page}`);
  }

  createProduct(formData: FormData) {
    return this.http.post(`${this.apiUrl}/create_product.php`, formData);
  }

  getProductById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/get_product.php?id=${id}`);
  }

  updateProduct(formData: FormData) {
    return this.http.post(`${this.apiUrl}/update_product.php`, formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/delete_product.php?id=${id}`);
  }
}
