import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingModalComponent } from './sorting-modal.component';

describe('SortingModalComponent', () => {
  let component: SortingModalComponent;
  let fixture: ComponentFixture<SortingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortingModalComponent]
    });
    fixture = TestBed.createComponent(SortingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
