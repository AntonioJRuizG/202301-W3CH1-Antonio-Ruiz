import { Character } from './character';

export class King extends Character {
  constructor(
    name: string,
    family: string,
    age: number,
    public reignLength: number
  ) {
    super(name, family, age);
    this.reignLength = reignLength;
  }

  greetings() {
    super.greetings();
    return `You all gonna die.`;
  }
}
