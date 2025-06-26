import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntraegeVerwaltung } from './antraege-verwaltung';

describe('AntraegeVerwaltung', () => {
  let component: AntraegeVerwaltung;
  let fixture: ComponentFixture<AntraegeVerwaltung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntraegeVerwaltung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntraegeVerwaltung);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
