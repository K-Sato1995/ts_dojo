class School {
  static startingTime: string = "9am";

  static start(): void {
    console.log(`${School.startingTime}!!!!!!!!`);
  }
}

School.startingTime; //=> 9am
School.start(); //=> 9am!!!!!!!!
