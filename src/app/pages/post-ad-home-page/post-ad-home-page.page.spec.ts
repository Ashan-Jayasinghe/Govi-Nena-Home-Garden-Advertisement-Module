import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostAdHomePagePage } from './post-ad-home-page.page';

describe('PostAdHomePagePage', () => {
  let component: PostAdHomePagePage;
  let fixture: ComponentFixture<PostAdHomePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAdHomePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
