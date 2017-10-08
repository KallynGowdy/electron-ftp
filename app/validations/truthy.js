
/**
 * Creates a validator that validates a value is "truthy".
 * @param {*} fieldName
 */
export default function (fieldName: string) {
  return (value) => {
    if (value === undefined || value === null || value === false || value === '' || value === 0) {
      return fieldName + ' required';
    }
  };
}
