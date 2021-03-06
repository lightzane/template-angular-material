import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';

const routes: Routes = [
  {
    path: '',
    component: CardComponent
  }
];

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    ClipboardModule
  ],
})
export class CardModule { }
