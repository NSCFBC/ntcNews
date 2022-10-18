import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-down-noticia',
  templateUrl: './down-noticia.component.html',
  styleUrls: ['./down-noticia.component.css']
})
export class DownNoticiaComponent implements OnInit {

  @Input() ntcUltima: Noticia[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
