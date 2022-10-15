import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNoticiaComponent } from './tabela-noticia.component';

describe('TabelaNoticiaComponent', () => {
  let component: TabelaNoticiaComponent;
  let fixture: ComponentFixture<TabelaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
