import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeilVierComponent } from './teil-vier.component';

describe('TeilVierComponent', () => {
  let component: TeilVierComponent;
  let fixture: ComponentFixture<TeilVierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeilVierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeilVierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
