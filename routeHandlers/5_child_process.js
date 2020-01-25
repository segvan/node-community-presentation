const { fork } = require("child_process");

module.exports = (req, res) => {
  console.log("child-process --- req");
  const longRunningComputation = fork("./longRunningComputation.js");
  longRunningComputation.send("start");
  longRunningComputation.on("message", () => {
    console.log("child-process --- res");
    res.send("Done child-process!");
  });
};
