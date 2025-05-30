import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./pages/cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'editar-produto/:id',
    loadChildren: () => import('./pages/editar-produto-page/editar-produto.module').then(m => m.EditarProdutoModule)
  },
  {
    path: 'excluir-produto',
    loadChildren: () => import('./pages/excluir-produto/excluir-produto.module').then( m => m.ExcluirProdutoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
