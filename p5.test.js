let callAndApply = require('./p5');

let update = function update(name, age, tShirtSize) {
  this.name = name;
  this.age = age;
  this.tShirtSize = tShirtSize;
  return this;
};
let person = { name: 'Kishor', age: 28, tShirtSize: 'L' };
describe('test cases for valid usage', () => {
  it('testcase 1 for valid input', () => {
    expect(callAndApply.caller(person, update, 'paridhi', '21', 'M')).toEqual({ age: '21', name: 'paridhi', tShirtSize: 'M' });
  });
  it('testcase 2 for valid input', () => {
    expect(callAndApply.applier(person, update, ['paridhi', '21', 'M'])).toEqual({ age: '21', name: 'paridhi', tShirtSize: 'M' });
  });
  it('test case 3 for typeof checking', () => {
    expect(typeof callAndApply.applier(person, update, ['paridhi', '21', 'M'])).toEqual('object');
  });
  it('test case 3 for typeof checking', () => {
    expect(typeof callAndApply.caller(person, update, 'paridhi', '21', 'M')).toEqual('object');
  });
});

describe('test cases for invalid usage', () => {
  it('testcase 1 for invalid input this as object', () => {
    expect(callAndApply.caller('this', update, 'paridhi', '21', 'M')).toEqual(false);
  });
  it('testcase 2 for valid input 1 as object', () => {
    expect(callAndApply.applier(1, update, ['paridhi', '21', 'M'])).toEqual(false);
  });
  it('testcase 3 for valid input array is object', () => {
    expect(callAndApply.applier([1, 2, 3], update, ['paridhi', '21', 'M'])).toEqual(false);
  });
  it('testcase 4 for valid input undefined as object', () => {
    expect(callAndApply.applier(undefined, update, ['paridhi', '21', 'M'])).toEqual(false);
  });
  it('testcase 5 for valid input 1 as object', () => {
    expect(callAndApply.caller(1, update, 'paridhi', '21', 'M')).toEqual(false);
  });
  it('testcase 6 for valid input array is object', () => {
    expect(callAndApply.caller([1, 2, 3], update, 'paridhi', '21', 'M')).toEqual(false);
  });
  it('testcase 7 for valid input undefined as object', () => {
    expect(callAndApply.caller(undefined, update, 'paridhi', '21', 'M')).toEqual(false);
  });
});
