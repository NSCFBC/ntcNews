import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home.component';
import { MainHomeComponent } from '../main-home/main-home.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class HomeModule { }
