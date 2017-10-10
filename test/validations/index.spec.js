import { v } from '../../app/validations';

describe('validations', () => {
  describe('v', () => {

    it('should return the first result that is truthy', () => {
      const first = (value) => { return; };
      const second = (value) => 'Invalid';
      const third = (value) => 'Also Invalid';

      const validator = v(first, second, third);

      const result = validator('value');

      expect(result).toBe('Invalid');
    });

    it('should return undefined if everything is falsy', () => {
      const first = (value) => { return; };
      const second = (value) => false;
      const third = (value) => 0;

      const validator = v(first, second, third);

      const result = validator('value');

      expect(result).toBeUndefined();
    });
  });
});
