const utility = require("./utility");

process.on("message", () => {
  console.log("Child process --- computation start");
  utility.longRunningComputation().then(() => {
    console.log("Child process --- computation done");
    process.send("Child process --- computation done");
  });
});
