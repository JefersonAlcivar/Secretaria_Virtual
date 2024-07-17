import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEnVivoComponent } from './chat-en-vivo.component';

describe('ChatEnVivoComponent', () => {
  let component: ChatEnVivoComponent;
  let fixture: ComponentFixture<ChatEnVivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatEnVivoComponent]
    });
    fixture = TestBed.createComponent(ChatEnVivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
