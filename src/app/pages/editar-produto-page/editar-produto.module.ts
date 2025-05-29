import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EditarProdutoPage } from './editar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EditarProdutoPage }])
  ],
  declarations: [EditarProdutoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditarProdutoModule {}
