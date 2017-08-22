import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post } from '../post';
import { PostPreviewComponent } from './post-preview.component';
import { User } from '../user';

describe('PostPreviewComponent', () => {

  let component: PostPreviewComponent;
  let fixture: ComponentFixture<PostPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostPreviewComponent
      ]
    });
    fixture = TestBed.createComponent(PostPreviewComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    component.post = {};
    component.post.author = {};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
