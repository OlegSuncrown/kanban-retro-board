import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from '../components/dialog/dialog.module';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    DialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
