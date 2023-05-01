import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourisComponent } from './souris.component';

describe('SourisComponent', () => {
  let component: SourisComponent;
  let fixture: ComponentFixture<SourisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
