let func1 = function (first) {
  let identity = function (second) {
    if (first === undefined || second === undefined) {
      return 'missing parameter';
    }
    return (first + second);
  };
  return identity;
};
module.exports = func1;
