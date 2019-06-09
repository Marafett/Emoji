import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeEmojiComponent } from './like-emoji.component';

describe('LikeEmojiComponent', () => {
  let component: LikeEmojiComponent;
  let fixture: ComponentFixture<LikeEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
