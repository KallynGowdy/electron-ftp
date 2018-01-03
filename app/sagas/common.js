
/**
 * Defines an interface for objects that provide sagas.
 */
interface ISaga {
  saga(): Generator;
}

/**
 * Loads the given saga.
 * @param {*} saga
 */
export function *loadSaga(saga: ISaga) {
  yield* saga.saga();
}

export function bindFunctions(saga: object) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(saga))
    .forEach(key => {
      const val = saga[key];
      if(typeof(val) === 'function' && key.indexOf('_') === 0) {
        const functionName = key.substr(1);
        saga[functionName] = val.bind(saga);
      }
    });
}
