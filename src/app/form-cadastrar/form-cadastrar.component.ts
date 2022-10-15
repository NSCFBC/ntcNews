import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.css']
})
export class FormCadastrarComponent implements OnInit {
  cadUserGroup: FormGroup = new FormGroup({});
  userCadastrado: Usuario = new Usuario();

  constructor(private fb: FormBuilder) {
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
    // this.userCadastrado = Object.assign({}, this.cadUserGroup.value, this.userCadastrado);
    // console.log(this.userCadastrado.nome);
  }
}
