function multiOutput(...targets) {
  return function output(data) {
    targets.forEach((target) => target(data));
  };
}

module.exports = multiOutput;
