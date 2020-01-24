const utility = require("../utility");

module.exports = (req, res) => {
  console.log("block --- req");
  utility.longRunningComputationSync();
  console.log("block --- res");
  res.send("Done with blocking main thread!");
};
