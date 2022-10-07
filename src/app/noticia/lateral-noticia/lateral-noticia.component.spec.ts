import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralNoticiaComponent } from './lateral-noticia.component';

describe('LateralNoticiaComponent', () => {
  let component: LateralNoticiaComponent;
  let fixture: ComponentFixture<LateralNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
