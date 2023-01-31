import { Character } from './character';

export class Squire extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public servesTo: string
  ) {
    super(name, family, age);
    this.servesTo = servesTo;
  }

  greetings() {
    super.greetings();
    return `I'm a loser.`;
  }
}
