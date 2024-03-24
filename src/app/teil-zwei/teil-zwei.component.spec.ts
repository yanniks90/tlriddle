import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilZweiComponent } from './teil-zwei.component';

describe('TeilZweiComponent', () => {
  let component: TeilZweiComponent;
  let fixture: ComponentFixture<TeilZweiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeilZweiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeilZweiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
