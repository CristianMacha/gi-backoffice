import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InventoryComponent },
      { path: 'category', component: CategoryComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class InventoryRoutingModule { }
