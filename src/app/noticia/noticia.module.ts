import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CarouselModule} from 'primeng/carousel';

import { NoticiaRoutingModule } from './noticia-routing.module';
import { RoutingComponent } from './routing/routing.component';
import { NoticiaLazyComponent } from './noticia-lazy/noticia-lazy.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { LateralNoticiaComponent } from './lateral-noticia/lateral-noticia.component';
import { DownNoticiaComponent } from './down-noticia/down-noticia.component';
import { ListNoticiaComponent } from './list-noticia/list-noticia.component';


@NgModule({
  declarations: [
    RoutingComponent,
    NoticiaLazyComponent,
    CarrouselComponent,
    LateralNoticiaComponent,
    DownNoticiaComponent,
    ListNoticiaComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    NoticiaRoutingModule
  ],
  exports: [
  ]
})
export class NoticiaModule { }
