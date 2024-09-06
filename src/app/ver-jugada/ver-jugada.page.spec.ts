import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerJugadaPage } from './ver-jugada.page';

describe('VerJugadaPage', () => {
  let component: VerJugadaPage;
  let fixture: ComponentFixture<VerJugadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerJugadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
