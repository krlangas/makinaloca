import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearJugadaPage } from './crear-jugada.page';

describe('CrearJugadaPage', () => {
  let component: CrearJugadaPage;
  let fixture: ComponentFixture<CrearJugadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJugadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
