import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroeDetalle } from './heroe-detalle';

describe('HeroeDetalle', () => {
  let component: HeroeDetalle;
  let fixture: ComponentFixture<HeroeDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
