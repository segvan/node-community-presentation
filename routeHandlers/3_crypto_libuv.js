const utility = require("../utility");

module.exports = (req, res) => {
  utility
    .longRunningLibUvComputation()
    .then(() => res.send("Done crypto libuv!"));
};
