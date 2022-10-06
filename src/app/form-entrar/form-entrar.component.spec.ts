import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntrarComponent } from './form-entrar.component';

describe('FormEntrarComponent', () => {
  let component: FormEntrarComponent;
  let fixture: ComponentFixture<FormEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEntrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
