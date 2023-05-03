import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquillajeRostroComponent } from './maquillaje-rostro.component';

describe('MaquillajeRostroComponent', () => {
  let component: MaquillajeRostroComponent;
  let fixture: ComponentFixture<MaquillajeRostroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaquillajeRostroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquillajeRostroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
