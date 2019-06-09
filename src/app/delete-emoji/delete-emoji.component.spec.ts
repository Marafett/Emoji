import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmojiComponent } from './delete-emoji.component';

describe('DeleteEmojiComponent', () => {
  let component: DeleteEmojiComponent;
  let fixture: ComponentFixture<DeleteEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
