import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VozatextoComponent } from './vozatexto.component';

describe('VozatextoComponent', () => {
  let component: VozatextoComponent;
  let fixture: ComponentFixture<VozatextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VozatextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VozatextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
