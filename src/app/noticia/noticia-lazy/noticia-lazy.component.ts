import { NoticiaService } from 'src/app/servico/noticia.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-noticia-lazy',
  templateUrl: './noticia-lazy.component.html',
  styleUrls: ['./noticia-lazy.component.css']
})
export class NoticiaLazyComponent implements OnInit, AfterViewInit {
  noticias: any;
  noticiaDown: Noticia[] = [];
  ntcDestaq: Noticia[] = [];

  ngAfterViewInit(): void {
    this.noticiaService.findUltimasNtc().subscribe({
      next: (data) => {
        this.noticias = (data.content);
        this.noticiaDown.push(this.noticias[0]);
        this.noticiaDown.push(this.noticias[1]);
        this.ntcDestaq.push(this.noticias[0]);
        this.ntcDestaq.push(this.noticias[1]);

      }
    });

  }



  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(): void {
  }

}
