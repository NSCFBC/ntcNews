import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownNoticiaComponent } from './down-noticia.component';

describe('DownNoticiaComponent', () => {
  let component: DownNoticiaComponent;
  let fixture: ComponentFixture<DownNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
