import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturavosComponent } from './capturavoz.component';

describe('CapturavosComponent', () => {
  let component: CapturavosComponent;
  let fixture: ComponentFixture<CapturavosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturavosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturavosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
