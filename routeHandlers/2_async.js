const utility = require("../utility");

module.exports = (req, res) => {
  utility.longRunningComputation().then(() => res.send("Done async!"));
};
