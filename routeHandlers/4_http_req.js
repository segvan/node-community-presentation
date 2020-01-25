const http = require("http");

module.exports = (req, res) => {
  console.log("http --- req");
  http.get(
    "http://www.openarchives.org/OAI/openarchivesprotocol.html",
    resp => {
      resp.on("data", chunk => console.log(chunk));
      resp.on("end", () => {
        console.log("http --- res");
        res.send("Done http request!");
      });
    }
  );
};
