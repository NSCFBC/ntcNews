import { Noticia } from 'src/app/model/noticia';
import { Component, Input, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-tabela-noticia',
  templateUrl: './tabela-noticia.component.html',
  styleUrls: ['./tabela-noticia.component.css']
})
export class TabelaNoticiaComponent implements OnInit {

  @Input() noticias: Noticia[] = [];


  constructor(public ngxSmartModalService: NgxSmartModalService) { }
  ngAfterViewInit(): void {
    // this.noticiaService.topDownNoticia().subscribe(data => {
      // console.log("dados carregados");
      // console.log(data);
      // this.noticias = data;
      // console.log("dados carregados");
    // });
  }
  // showDialog(noticia : any) {
  //   // this.display = !this.display;
  //   this.noticia = noticia;
  //   this.noticia.nomeCat = this.noticia.categoria.nome;
  //   // console.log("sjdsaipd");
  //   // console.log(this.noticia.categoria.nome);
  // }

  ngOnInit(): void {
    // this.noticias = [
    //   {
    //     caminhoImagem: 'ads',
    //     dataNoticia: '2010/10/10',
    //     titulo: 'asdasdasdasdas',
    //     subtitulo: 'asd',
    //     conteudo: 'adads',
    //   },
    //   {
    //     caminhoImagem: 'ads',
    //     dataNoticia: '2010/10/10',
    //     titulo: 'asdasdasdasdas',
    //     subtitulo: 'asd',
    //     conteudo: 'adads',
    //   },
    //   {
    //     caminhoImagem: 'ads',
    //     dataNoticia: '2010/10/10',
    //     titulo: 'asdasdasdasdas',
    //     subtitulo: 'asd',
    //     conteudo: 'adads',
    //   }, {
    //     caminhoImagem: 'ads',
    //     dataNoticia: '2010/10/10',
    //     titulo: 'asdasdasdasdas',
    //     subtitulo: 'asd',
    //     conteudo: 'adads',
    //   }
    // ];
  }

}
