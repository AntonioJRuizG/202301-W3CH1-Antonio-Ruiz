import { Character } from './index';

export class Adviser extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public helpsTo: string
  ) {
    super(name, family, age);
    this.helpsTo = helpsTo;
  }

  greetings() {
    super.greetings();
    return `I think I'm gonna die soon.`;
  }
}
