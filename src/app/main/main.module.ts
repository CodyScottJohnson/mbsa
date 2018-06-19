import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const routes: Routes = [
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
