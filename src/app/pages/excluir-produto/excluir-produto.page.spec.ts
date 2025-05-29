import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluirProdutoPage } from './excluir-produto.page';

describe('ExcluirProdutoPage', () => {
  let component: ExcluirProdutoPage;
  let fixture: ComponentFixture<ExcluirProdutoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
