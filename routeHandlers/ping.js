const utility = require("../utility");

module.exports = (req, res) => {
  console.log("ping --- req");
  utility.shortComputationSync();
  console.log("ping --- res");
  res.send("OK!");
};
