import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryComponent } from './inventory.component';
import { CategoryComponent } from './category/category.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InventoryComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    RouterModule
  ]
})
export class InventoryModule { }
