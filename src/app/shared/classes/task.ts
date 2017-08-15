export class Task {
  taskId: number;
  startTime: Time;
  endTime: Time;
  comment: string;
  minPerTask: number;
}

class Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}
