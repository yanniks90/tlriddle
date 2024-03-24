import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilDreiComponent } from './teil-drei.component';

describe('TeilDreiComponent', () => {
  let component: TeilDreiComponent;
  let fixture: ComponentFixture<TeilDreiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeilDreiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeilDreiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
