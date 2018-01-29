let identity = function (first, second) {
  if (first === undefined || second === undefined) {
    return 'false';
  }
  return (first + second);
};
module.exports = identity;
