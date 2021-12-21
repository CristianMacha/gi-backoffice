import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

const MODULES_MATERIAL = [
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatGridListModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatChipsModule,
  MatRippleModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatSortModule,
  MatTabsModule,
]

@NgModule({
  imports: [
    MODULES_MATERIAL
  ],
  exports: [
    MODULES_MATERIAL
  ]
})
export class MaterialModule { }
