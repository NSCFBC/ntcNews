import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Noticia } from '../model/noticia';
import { NoticiaService } from '../servico/noticia.service';

@Component({
  selector: 'app-form-cadastrar-noticia',
  templateUrl: './form-cadastrar-noticia.component.html',
  styleUrls: ['./form-cadastrar-noticia.component.css']
})
export class FormCadastrarNoticiaComponent implements OnInit {

  cadNoticiaGroup: FormGroup = new FormGroup({});
  noticia: Noticia = new Noticia();

  constructor(private fb: FormBuilder, private noticiaService: NoticiaService) {
    this.cadNoticiaGroup = this.fb.group({
      titulo: [''],
      subtitulo: [''],
      conteudo: ['']
    });
   }

  ngOnInit(): void {
  }
  cadastro() {
    this.noticia = Object.assign({},  this.noticia,this.cadNoticiaGroup.value);
    console.log(JSON.stringify(this.noticia))
    this.noticia.usuario.id = 1;
    this.noticia.categoria.id = 2;
    this.noticiaService.cadastrar(this.noticia).subscribe({
      next: (data) => {
        console.log("insert noticia")
        console.log(data)
      },
      error: (err) => {
        console.log("erro noticia")
        console.log(err)
      }
    });
  }
}
