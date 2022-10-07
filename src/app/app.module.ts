import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { NavComponent } from './nav/nav.component';
import { HomeModule } from './home/home.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormEntrarComponent } from './form-entrar/form-entrar.component';
import { NoticiaModule } from './noticia/noticia.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormEntrarComponent
  ],
  imports: [
    HomeModule,
    BrowserAnimationsModule,
    MenubarModule,
    BrowserModule,
    NgxSmartModalModule.forRoot(),
    AppRoutingModule,
    NoticiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
