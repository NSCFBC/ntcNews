import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-lateral-noticia',
  templateUrl: './lateral-noticia.component.html',
  styleUrls: ['./lateral-noticia.component.css']
})
export class LateralNoticiaComponent implements OnInit {

  @Input() ntcDestaque: Noticia[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
