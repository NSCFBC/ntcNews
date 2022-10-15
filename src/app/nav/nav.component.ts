import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public ngxSmartModalService: NgxSmartModalService) {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-user',
        routerLink: [''],
      },
      {
        label: 'Noticias',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Destaques',
            icon: 'pi pi-fw pi-star',
          },
          {
            label: 'Cidade',
            icon: 'pi pi-fw pi-bell',
          },

          {
            label: 'Música',
            icon: 'pi pi-fw pi-volume-up',
          },
          {
            label: 'Esporte',
            icon: 'pi pi-fw pi-heart',
          },
          {
            label: 'Educação',
            icon: 'pi pi-fw pi-book',
          },
        ],
      },
      {
        label: 'Usuário',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Pesquisar',
            icon: 'pi pi-fw pi-search',
          },
          {
            label: 'Remover',
            icon: 'pi pi-fw pi-trash',
          },
          {
            label: 'Meu Perfil',
            icon: 'pi pi-fw pi-pencil',
          },
          {
            label: 'Atualizar',
            icon: 'pi pi-fw pi-pencil',
          },
        ],
      },
      {
        label: 'Noticia',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Adicionar',
            icon: 'pi pi-fw pi-book',
          },
          {
            label: 'Pesquisar',
            icon: 'pi pi-fw pi-search',
            routerLink: '/noticias',
          },
          { label: 'Atualizar', icon: 'pi pi-fw pi-pencil' },
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
        ],
      },
      {
        label: 'Cadastrar-se',
        icon: 'pi pi-fw pi-file',
        command: () => {
          this.ngxSmartModalService.getModal('modalCadastro').open();
        },
      },
      {
        label: 'Entrar',
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.ngxSmartModalService.getModal('modalEntrar').open();
        },
      },
      {
        label: 'Sair',
        icon: 'pi pi-fw pi-sign-out',
        routerLink: '/home',
      },
    ];
  }
}
