import { King } from './king';
describe('first', () => {
  test('should first', () => {
    const char = new King('Luis XVI', 'Austria', 75, 20);
    expect(char).toHaveProperty('name');
    expect(char).toHaveProperty('family');
    expect(char).toHaveProperty('age');
    expect(char).toHaveProperty('reignLength');
  });
});
