import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseServidor } from '../constante/base-servidor';
import { Usuario } from '../model/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Noticia } from '../model/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {
  }
  findAll(): Observable<any> {
    return this.http.get(BaseServidor.noticias);
  }


}
