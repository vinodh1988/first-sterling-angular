import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBoxComponent } from './menu-box.component';

describe('MenuBoxComponent', () => {
  let component: MenuBoxComponent;
  let fixture: ComponentFixture<MenuBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
