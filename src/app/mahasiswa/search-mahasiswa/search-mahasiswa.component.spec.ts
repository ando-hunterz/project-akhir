import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMahasiswaComponent } from './search-mahasiswa.component';

describe('SearchMahasiswaComponent', () => {
  let component: SearchMahasiswaComponent;
  let fixture: ComponentFixture<SearchMahasiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMahasiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
