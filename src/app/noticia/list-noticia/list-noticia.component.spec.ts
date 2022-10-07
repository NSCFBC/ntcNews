import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNoticiaComponent } from './list-noticia.component';

describe('ListNoticiaComponent', () => {
  let component: ListNoticiaComponent;
  let fixture: ComponentFixture<ListNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
