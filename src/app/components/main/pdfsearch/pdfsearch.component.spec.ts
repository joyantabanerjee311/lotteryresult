import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfsearchComponent } from './pdfsearch.component';

describe('PdfsearchComponent', () => {
  let component: PdfsearchComponent;
  let fixture: ComponentFixture<PdfsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
