export class Task {
  taskId: number;
  startTime = new Time();
  endTime = new Time();
  comment: string;
  minPerTask: number;

  static clone(task: Task): Task {
    const temp = new Task();
    temp.taskId = task.taskId;
    temp.startTime = Time.clone(task.startTime);
    temp.endTime = Time.clone(task.endTime);
    temp.comment = task.comment;
    temp.minPerTask = task.minPerTask;
    return temp;
  }

  static equals(task1: Task, task2: Task): boolean {
    return task1.taskId === task2.taskId && Time.equals(task1.startTime, task2.startTime);
  }
}

export class Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;

  static clone(time: Time): Time {
    const temp = new Time();
    temp.hour = time.hour;
    temp.minute = time.minute;
    temp.second = time.second;
    temp.nano = time.nano;
    return temp;
  }

  static equals(time1: Time, time2: Time): boolean {
    return time1.hour   ===  time2.hour &&
           time1.minute ===  time2.minute &&
           time1.second ===  time2.second &&
           time1.nano   ===  time2.nano;
  }

  static timeToString(time: Time): string {
    return (time.hour > 10 ? time.hour : '0' + time.hour) + ':' +
      (time.minute > 10 ? time.minute : '0' + time.minute);
  }
}
