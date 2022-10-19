import { NoticiaService } from './servico/noticia.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { NavComponent } from './nav/nav.component';
import { HomeModule } from './home/home.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ToastrModule } from 'ngx-toastr';

import { FormEntrarComponent } from './form-entrar/form-entrar.component';
import { NoticiaModule } from './noticia/noticia.module';
import { FormCadastrarComponent } from './form-cadastrar/form-cadastrar.component';
import { HttpInterceptorModule } from './interceptor/header-interceptor.service';
import { FormCadastrarNoticiaComponent } from './form-cadastrar-noticia/form-cadastrar-noticia.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormEntrarComponent,
    FormCadastrarComponent,
    FormCadastrarNoticiaComponent
  ],
  imports: [
    HttpInterceptorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    MenubarModule,
    BrowserModule,
    NgxSmartModalModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    NoticiaModule
  ],
  providers: [NoticiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
