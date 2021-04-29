import { isObject, isFunction } from '../utils';

const fn = () => {
  return;
};

describe('utils.ts', () => {
  it('isObject is true', () => {
    expect(isObject({})).toBe(true);
  });

  it('isObject is false', () => {
    expect(isObject(3)).toBe(false);
  });

  it('isFunction is true', () => {
    expect(isFunction(fn)).toBe(true);
  });

  it('isFunction is false', () => {
    expect(isFunction(3)).toBe(false);
  });
});
