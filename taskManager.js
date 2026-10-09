class Task {
    constructor(id, title, completed = false) {
      // Define read-only 'id' property immutably
      Object.defineProperty(this, 'id', {
        value: id,
        writable: false,
        configurable: false,
        enumerable: true
      });
  
      this.title = title;
      this.completed = completed;
    }
  
    // Returns a new Task object with flipped completed value
    toggle() {
      return new Task(this.id, this.title, !this.completed);
    }
  }
  
  class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    // Replaces tasks immutably
    setTasks(tasks) {
      this.tasks = [...tasks];
    }
  
    // Adds a task immutably
    addTask(task) {
      this.tasks = [...this.tasks, task];
    }
  
    // Removes a task immutably
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  
    // Toggles completion immutably
    toggleTask(taskId) {
      this.tasks = this.tasks.map(task => {
        if (task.id === taskId) {
          return task.toggle();
        }
        return task;
      });
    }
  }