import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoeschen } from './dialog-loeschen';

describe('DialogLoeschen', () => {
  let component: DialogLoeschen;
  let fixture: ComponentFixture<DialogLoeschen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogLoeschen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLoeschen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
