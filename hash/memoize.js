function memorize(fn) {
  const cache = {};
  return function(...args) {
    // if arg had been called before, return value;
    if(cache[args]) {
      return cache[args];
    } 
    // else if arg hasn't been called yet
    const result = fn.apply(this, args);
    // store and return result
    cache[args] = result;
    return result;
  }
}