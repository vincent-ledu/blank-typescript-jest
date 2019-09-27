import foo, { bar } from '../index'

describe('testing index', () => {
  it('shoud be false when calling bar and true when calling foo', () => {

    expect(foo()).toBe(true)
    expect(bar()).toBe(false)

  });

});