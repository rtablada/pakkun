export default function pakkun(start, ...stack) {
  let result = start;

  for (const curry of stack) {
    if (typeof curry === 'function') {
      result = curry(result);
    } else {
      const [cb, ...args] = curry;

      result = cb(result, ...args);
    }
  }

  return result;
}
