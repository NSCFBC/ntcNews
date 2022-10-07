import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit, AfterViewInit {
  noticias: any;

  constructor() { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.noticias= [
      {
        msg: 'conteudo slide um',
        img: '/assets/img01Slide.jpg',
        src: '1',
        index: 1,
      },
      {
        msg: 'conteudo slide dois',
        img: '/assets/img02Slide.jpg',
        src: '2',
        index: 5,
      },
      {
        msg: 'conteudo slide tres',
        img: '/assets/img03Slide.jpg',
        src: '3',
        index: 12,
      }
    ];
  }

}
