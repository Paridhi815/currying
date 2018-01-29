let tester = require('./p1');

describe('Basic Valid Input Conditions:', function () {
  it('Check with 1 valid integer parameter->', () => {
    expect(tester(5)).toBe(5);
  });

  it('Check with a String parameter', () => {
    expect(tester('Pari')).toBe('Pari');
  });

  it('Check With 2 arguments', () => {
    expect(tester(4, 6)).toBe(4);
  });

  it('Cheack With no arguments', () => {
    expect(tester()).toBe();
  });
});

describe('Invalid Input Conditions:', function () {
  it('Cheack With undefined as an argument', () => {
    expect(tester(undefined)).toBe(undefined);
  });
  it('Cheack With undefined as an argument', () => {
    expect(tester(null)).toBe(null);
  });
  it('Check for the type of value returned', () => {
    expect(typeof (tester(4))).toBe('number');
  });
});
