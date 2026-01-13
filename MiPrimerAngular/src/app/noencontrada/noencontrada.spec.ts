import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noencontrada } from './noencontrada';

describe('Noencontrada', () => {
  let component: Noencontrada;
  let fixture: ComponentFixture<Noencontrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noencontrada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noencontrada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
