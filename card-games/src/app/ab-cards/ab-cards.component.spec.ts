import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABCardsComponent } from './ab-cards.component';

describe('ABCardsComponent', () => {
  let component: ABCardsComponent;
  let fixture: ComponentFixture<ABCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
