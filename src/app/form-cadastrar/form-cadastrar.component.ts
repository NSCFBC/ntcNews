import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { json } from 'express';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../servico/usuario.service';

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.css']
})
export class FormCadastrarComponent implements OnInit {
  cadUserGroup: FormGroup = new FormGroup({});
  usuario: Usuario = new Usuario();

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) {
    this.cadUserGroup = this.fb.group({
      nome: [''],
      email: [''],
      senha: [''],
      cfSenha: [''],
    });
   }

  ngOnInit(): void {
  }
  cadastro() {
    this.usuario = Object.assign({},  this.usuario,this.cadUserGroup.value);
    console.log(JSON.stringify(this.usuario))
    this.usuarioService.cadastrar(this.usuario);
    console.log(this.usuario.nome);
  }
}
