import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechungVerwaltung } from './rechung-verwaltung';

describe('RechungVerwaltung', () => {
  let component: RechungVerwaltung;
  let fixture: ComponentFixture<RechungVerwaltung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechungVerwaltung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechungVerwaltung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
