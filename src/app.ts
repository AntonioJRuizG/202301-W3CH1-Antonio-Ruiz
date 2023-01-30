interface Live {
  name: string;
  family: string;
}

export class Character implements Live {
  private isLive: boolean;

  constructor(public name: string, public family: string, public age: number) {
    this.isLive = true;
    this.name = name;
    this.family = family;
    this.age = age;
  }

  greetings() {
    return `Hello, I'm ${this.name}`;
  }

  kill() {
    this.isLive = false;
  }
}
