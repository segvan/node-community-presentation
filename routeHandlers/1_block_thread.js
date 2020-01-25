const utility = require("../utility");

module.exports = (req, res) => {
  console.log("sync --- req");
  utility.longRunningComputationSync();
  console.log("sync --- res");
  res.send("Done with blocking main thread!");
};
