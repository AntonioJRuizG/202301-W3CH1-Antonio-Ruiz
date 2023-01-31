import { Character } from './character';

describe('first', () => {
  test('should first', () => {
    const char = new Character('Luis XVI', 'Austria', 75);
    expect(char).toHaveProperty('name');
    expect(char).toHaveProperty('family');
    expect(char).toHaveProperty('age');
  });
});
