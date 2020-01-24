const utility = require("../utility");

module.exports = (req, res) => {
  utility.longRunningComputationSync();
  res.send("Done with blocking main thread!");
};
