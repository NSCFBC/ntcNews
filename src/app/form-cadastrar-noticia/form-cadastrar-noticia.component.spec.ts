import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastrarNoticiaComponent } from './form-cadastrar-noticia.component';

describe('FormCadastrarNoticiaComponent', () => {
  let component: FormCadastrarNoticiaComponent;
  let fixture: ComponentFixture<FormCadastrarNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastrarNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCadastrarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
