import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeAlsoComponent } from './delete-me-also.component';

describe('DeleteMeAlsoComponent', () => {
  let component: DeleteMeAlsoComponent;
  let fixture: ComponentFixture<DeleteMeAlsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMeAlsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMeAlsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
