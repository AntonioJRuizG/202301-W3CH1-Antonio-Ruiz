/* eslint-disable no-unused-vars */
/* interface Live {
  name: string;
  family: string;
} */
export class Character {
  private isLive = true;

  // eslint-disable-next-line no-useless-constructor
  constructor(public name: string, public family: string, public age: number) {}

  greetings() {
    return `Hello, I'm ${this.name}`;
  }

  kill() {
    this.isLive = false;
  }
}
