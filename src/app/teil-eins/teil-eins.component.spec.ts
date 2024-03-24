import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilEinsComponent } from './teil-eins.component';

describe('TeilEinsComponent', () => {
  let component: TeilEinsComponent;
  let fixture: ComponentFixture<TeilEinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeilEinsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeilEinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
