const crypto = require("crypto");

function fibonacci(x) {
  if (x <= 2) {
    return 1;
  } else {
    return fibonacci(x - 1) + fibonacci(x - 2);
  }
}

exports.shortComputationSync = () => fibonacci(10);

exports.longRunningComputationSync = () => fibonacci(43);

exports.longRunningComputation = () => {
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      fibonacci(43);
      resolve();
    });
  });
};

exports.longRunningLibUvComputation = () => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2("a", "b", 800000, 512, "sha512", () => {
      resolve();
    });
  });
};
