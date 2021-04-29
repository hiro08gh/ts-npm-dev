export function isObject<T>(obj: T): boolean {
  return obj !== null && typeof obj === 'object';
}

export function isFunction<T>(fn: T): boolean {
  return fn !== null && typeof fn === 'function';
}
