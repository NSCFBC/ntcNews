import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  // Se existir token no localStorage é adicionado ao header da requisição:
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('token') != null) {
      const token = 'Bearer ' + localStorage.getItem('token');
      //sobreEscrever a requisição
      const tokenRequest = req.clone({
        // headers: req.headers.set('Authorization', token)
        setHeaders: {
          Authorization: token,
        }
      });
      return next.handle(tokenRequest);
    }
    else {
      return next.handle(req)
    }
  }
  constructor() { }
}
@NgModule({
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true,
  },
  ],
})
export class HttpInterceptorModule{

}
