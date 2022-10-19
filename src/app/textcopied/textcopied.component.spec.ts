import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextcopiedComponent } from './textcopied.component';

describe('TextcopiedComponent', () => {
  let component: TextcopiedComponent;
  let fixture: ComponentFixture<TextcopiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextcopiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextcopiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
