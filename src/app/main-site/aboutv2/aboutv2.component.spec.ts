import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutv2Component } from './aboutv2.component';

describe('Aboutv2Component', () => {
  let component: Aboutv2Component;
  let fixture: ComponentFixture<Aboutv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutv2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aboutv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
