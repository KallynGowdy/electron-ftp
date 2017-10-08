import truthy from '../../app/validations/truthy';

/**
 * A list of values that are tested to be truthy.
 */
export const truthyValues = [
  '1',
  '0',
  '-1',
  'a',
  {},
  -1,
  1,
  true,
  0.1
];

/**
 * A list of values that are tested to be falsy.
 */
export const falsyValues = [
  '',
  null,
  undefined,
  false
];

describe('validations', () => {
  describe('truthy', () => {
    truthyValues.forEach(value => {
      it('should pass with ' + value, () => {
        const result = truthy('Value')(value);

        expect(result).toBeUndefined();
      });
    });

    falsyValues.forEach(value => {
      it('should fail for ' + value, () => {
        const result = truthy('Value')(value);

        expect(result).toBe('Value required');
      });
    });
  });
});
