const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });
  req.on("end", () => {
    req.body = parseBody(reqBody);
    sendFormPage(req, res);
  });
});

server.listen(port, () =>
  console.log(`Successfully started the server on port ${port}`)
);

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
