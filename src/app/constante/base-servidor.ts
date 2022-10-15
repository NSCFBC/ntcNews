export class BaseServidor {
  public static get baseServidor(): string { return "http://localhost:8080/" }
  public static get nomeAplicacao(): string { return this.baseServidor + "NoticiarioRestFulMVC/" }
  public static get noticias(): string { return this.nomeAplicacao + "noticias/" }
  public static get login(): string { return this.nomeAplicacao + "login" };
}
