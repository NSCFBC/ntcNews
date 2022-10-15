import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Usuario } from '../model/usuario';
import { UsuarioService } from '../servico/usuario.service';

@Component({
  selector: 'app-form-entrar',
  templateUrl: './form-entrar.component.html',
  styleUrls: ['./form-entrar.component.css'],
})
export class FormEntrarComponent implements OnInit {
  usuario: Usuario = new Usuario();
  formUser: FormGroup  = new FormGroup({});;
  formResult: string = '';


  constructor(private fb: FormBuilder,private usuarioService: UsuarioService) {
    this.formUser = this.fb.group({
      email: [''],
      senha: [''],
    });
  }

  ngOnInit(): void { }

  login() {
    // this.usuario = Object.assign({}, this.formUser.value, this.formUser);
    // console.log(`user: ${this.usuario.email}`);

    this.usuario = Object.assign({}, this.usuario, this.formUser.value);
    this.formResult = JSON.stringify(this.formUser.value);

    let resposta = this.usuarioService.login(this.usuario);
    // console.log("login");
    // console.log(resposta);
    // console.log("login");
  }
}
