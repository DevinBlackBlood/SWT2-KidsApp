import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Another } from './another';

describe('Another', () => {
  let component: Another;
  let fixture: ComponentFixture<Another>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Another]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Another);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
