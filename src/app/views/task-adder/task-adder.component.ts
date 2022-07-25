import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/model/Task';

@Component({
  selector: 'app-task-adder',
  templateUrl: './task-adder.component.html',
  styleUrls: ['./task-adder.component.css']
})
export class TaskAdderComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  showAddTask: boolean = true;
  title!: string;
  completed!: boolean;

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      title: this.title,
      completed: this.completed
    };

    this.onAddTask.emit(newTask);

    this.title = '';
      this.completed = false;
  }
}
