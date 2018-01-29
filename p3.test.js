let tester = require('./p3');

describe('Conditions where parameter is missing:', function () {
  it('Check 2nd argument missing:', () => {
    expect(tester()(1)).toBe('missing parameter');
  });

  it('Check with 1st argument missing', () => {
    expect(tester(1)()).toBe('missing parameter');
  });

  it('Check With no arguments', () => {
    expect(tester()()).toBe('missing parameter');
  });
});

describe('Conditions where all parameters are present:', function () {
  it('Check with 2 valid integer parameters->', () => {
    expect(tester(5)(6)).toBe(11);
  });
  it('Check with 2 valid integer parameters->', () => {
    expect(tester(5)(-6)).toBe(-1);
  });
  it('Check the type of value returned', () => {
    expect(typeof (tester(4)(6))).toBe('number');
  });
});
describe('Conditions of null and undefined:', function () {
  it('Check with 2 nulls->', () => {
    expect(tester(null)(null)).toBe(0);
  });
  it('Check with 2 valid integer parameters->', () => {
    expect(tester(undefined)(undefined)).toBe('missing parameter');
  });
});
