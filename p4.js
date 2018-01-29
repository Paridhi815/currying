let total = 0;
let delayInvoc = function (args) {
  if (args === undefined) {
    // let result = total;
    // total = null;
    return total;
  }
  total += args;
  return delayInvoc;
};

module.exports = delayInvoc;
