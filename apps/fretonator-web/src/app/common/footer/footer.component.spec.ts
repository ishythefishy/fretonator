import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from './footer.module';

describe('FooterComponent', () => {
  @Component({
    selector: 'app-footer-spec',
    template: `
      <app-footer></app-footer>
    `
  })
  class FooterComponentSpec {
  }

  let component: FooterComponentSpec;
  let fixture: ComponentFixture<FooterComponentSpec>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponentSpec],
      imports: [FooterModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponentSpec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
