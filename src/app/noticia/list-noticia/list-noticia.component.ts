import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/servico/noticia.service';

@Component({
  selector: 'app-list-noticia',
  templateUrl: './list-noticia.component.html',
  styleUrls: ['./list-noticia.component.css']
})
export class ListNoticiaComponent implements OnInit, AfterViewInit {
  // destaque: any;

  @Input() recebenoticias:any;

  constructor() {  console.log('oks noticia')
  console.log(this.recebenoticias)
  console.log('oks noticia')}
  ngAfterViewInit(): void {
    console.log('oks noticia')
    console.log(this.recebenoticias)
    console.log('oks noticia')
  }

  ngOnInit(): void {
    // console.log('oks noticia')
    // console.log(this.recebenoticias.length)
    // console.log('oks noticia')
}
  //    this.destaque =[
  //     {
  //       titulo: 'Titulo noticia mais recente',
  //       subtitulo: 'Subtitulo noticia mais recente',
  //       numeroNT: 1
  //     },
  //     {
  //       titulo: 'Titulo noticia mais recente 2',
  //       subtitulo: 'Subtitulo noticia mais recente 2',
  //       numeroNT: 2
  //     },
  //     {
  //       titulo: 'Titulo noticia mais recente 3',
  //       subtitulo: 'Subtitulo noticia mais recente 3',
  //       numeroNT: 3
  //     }
  //     ,
  //     {
  //       titulo: 'Titulo noticia mais recente 4',
  //       subtitulo: 'Subtitulo noticia mais recente 4',
  //       numeroNT: 4
  //     }
  //     ,
  //     {
  //       titulo: 'Titulo noticia mais recente 5',
  //       subtitulo: 'Subtitulo noticia mais recente 5',
  //       numeroNT: 5
  //     }
  //     ,
  //     {
  //       titulo: 'Titulo noticia mais recente 6',
  //       subtitulo: 'Subtitulo noticia mais recente 6',
  //       numeroNT: 6
  //     }


  //   ]
  // }

}
