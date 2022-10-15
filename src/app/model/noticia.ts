export class Noticia {
  private _titulo: string | any;
  private _subtitulo: string | any;
  private _conteudo: string | any;
  private _caminhoImagem: string | any;

  set caminhoImagem(value: string) {
    this._caminhoImagem = value;
  }

  get caminhoImagem(): string {
    return this._caminhoImagem;
  }

  set conteudo(value: string) {
    this._conteudo = value;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  set subtitulo(value: string) {
    this.subtitulo = value;
  }

  get subtitulo(): string {
    return this._subtitulo;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  // private Date dataNoticia;

  constructor() {}
}
