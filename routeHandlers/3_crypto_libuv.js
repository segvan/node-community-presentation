const utility = require("../utility");

module.exports = (req, res) => {
  console.log("crypto --- req");
  utility.longRunningLibUvComputation().then(() => {
    console.log("crypto --- res");
    res.send("Done crypto libuv!");
  });
};
