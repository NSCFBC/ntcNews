import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Noticia } from './model/noticia';
import { Usuario } from './model/usuario';
import { NoticiaService } from './servico/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'ntcNews';
  value: number = 60;
  noticias: Noticia[] = [];
  constructor(private noticiaService: NoticiaService){}
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.noticiaService.findAll().subscribe(noticia => {
      // this.noticias.push(noticia);
      this.noticias = noticia;
    })

    for (let index = 0; index < this.noticias.length; index++) {
      console.log(this.noticias[index].titulo);
    }
  }
}
