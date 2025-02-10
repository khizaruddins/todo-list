import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAnalyticsComponent } from './todo-analytics.component';

describe('TodoAnalyticsComponent', () => {
  let component: TodoAnalyticsComponent;
  let fixture: ComponentFixture<TodoAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAnalyticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
