
export function v(...validators: Function[]) {
  return (value) => {
    for (let i = 0; i < validators.length; i++) {
      let error = validators[i](value);
      if (error) {
        return error;
      }
    }
  };
}

export truthy from './truthy';
export serverAddress from './serverAddress';
