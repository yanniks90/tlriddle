import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLockComponent } from './key-lock.component';

describe('KeyLockComponent', () => {
  let component: KeyLockComponent;
  let fixture: ComponentFixture<KeyLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyLockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
