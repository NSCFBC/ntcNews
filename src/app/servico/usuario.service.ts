import { Usuario } from './../model/usuario';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseServidor } from '../constante/base-servidor';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  cadastrar(usuario: Usuario) {
    return this.http.post(BaseServidor.usuarios, JSON.parse(JSON.stringify(usuario))).subscribe({
      next: (data) => data,
      error: (error) => {
        let toast = this.toastr.error(
          'Erro ao realizar cadastro!!',
          'Erro',
          {
            timeOut: 1500,
            extendedTimeOut: 1000,
            closeButton: true,
            progressBar: true,
          }
        );
      }
   });
  }

  usuarioLogado(): boolean {
    return localStorage.getItem("token") != null ? true : false;
  }
  login(usuario: Usuario) {
    return this.http
      .post(BaseServidor.login, JSON.stringify(usuario))
      .subscribe({
        next: (data) => {
          let token = JSON.parse(JSON.stringify(data)).Authorization.split(
            ' '
          )[1];
          localStorage.setItem('token', token);
          let toast = this.toastr.success(
            'Login realizado com sucesso!!',
            'Sucesso!',
            {
              timeOut: 1500,
              extendedTimeOut: 1000,
              closeButton: true,
              progressBar: true,
            }
          );
          if (toast) {
            toast.onHidden.subscribe(() => {
              // this.router.navigateByUrl('fazer');
              this.router.navigate(['/home']).then(() => {
                window.location.reload();
              });
            });
          }
        },
        error: (error) => {
          console.log('erro aconteceu');
          console.log(error);
          let toast = this.toastr.error(
            'Usu??rio ou senha inv??lidos!!',
            'Erro',
            {
              timeOut: 1500,
              extendedTimeOut: 1000,
              closeButton: true,
              progressBar: true,
            }
          );
        },
      });
  }

}
