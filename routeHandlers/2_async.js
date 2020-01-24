const utility = require("../utility");

module.exports = (req, res) => {
  console.log("async --- req");
  utility.longRunningComputation().then(() => {
    console.log("async --- res");
    res.send("Done async!");
  });
};
