import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahasiswaListComponent } from './mahasiswa-list.component';

describe('MahasiswaListComponent', () => {
  let component: MahasiswaListComponent;
  let fixture: ComponentFixture<MahasiswaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahasiswaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
