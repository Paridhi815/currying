let tester = require('./p2');

describe('Base Conditions:', function () {
  it('Check with 2 valid positive integer parameters->', () => {
    expect(tester(5, 6)).toBe(11);
  });
  it('Check with 2 valid negative integer parameters->', () => {
    expect(tester(5, -6)).toBe(-1);
  });
  // it('Check with adecimal Values', () => {
  //   expect(tester(1.1, 2.2)).toBe(3.3);
  // });

  it('Check for the type of value returned', () => {
    expect(typeof (tester(4, 6))).toBe('number');
  });
});
describe('Base Conditions:', function () {
  it('Check with 2 undefined parameters->', () => {
    expect(tester(undefined, undefined)).toBe('false');
  });
  it('Check with no parameters->', () => {
    expect(tester()).toBe('false');
  });
  it('Check with 2 null parameters->', () => {
    expect(tester(null, null)).toBe(0);
  });
});
