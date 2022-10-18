export class BaseServidor {
  public static get baseServidor(): string { return "http://localhost:8080/" }
  public static get nomeAplicacao(): string { return this.baseServidor + "NoticiarioRestFulMVC/" }
  public static get usuarios(): string { return this.nomeAplicacao + "usuarios/" };
  public static get noticias(): string { return this.nomeAplicacao + "noticias/" };


  public static get login(): string { return this.nomeAplicacao + "login" };

  public static get topUltimaDez(): string { return this.nomeAplicacao + "noticias/paginacao?page=0&size=10&sort=dataNoticia,desc" };
  // sort=id,desc&sort=name
}
