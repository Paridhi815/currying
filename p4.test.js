let tester = require('./p4');

describe('Conditions where parameter is missing:', function () {
  it('Check 2nd argument missing:', () => {
    expect(tester()).toBe(0);
  });

  it('Check with 1st argument missing', () => {
    expect(tester(1)(2)()).toBe(3);
  });

  it('Check With no arguments', () => {
    expect(tester(2)(-1)()).toBe(4);
  });

  it('Check the type of value returned', () => {
    expect(typeof (tester(4)(6))).toBe('function');
  });
});

describe('Check for the type of value returned:', function () {
  it('Check the type of value returned', () => {
    expect(typeof (tester(4)(6))).toBe('function');
  });
});
