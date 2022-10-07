import { NoticiaLazyComponent } from './noticia-lazy/noticia-lazy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';

const routesa: Routes = [
  {
    path: '', component: RoutingComponent,
    children: [
      { path: '', redirectTo: 'todasNoticias', pathMatch: "full"},
      { path: 'todasNoticias', component: NoticiaLazyComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesa)],
  exports: [RouterModule]
})
export class NoticiaRoutingModule { }
