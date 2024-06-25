const http = require("http");

const myServer = (req, res) => {
  //ToDo: Write the logic to handle the request and send the responses
  console.log("Request received");
  console.log(req.url); // Where the request is received
  const response = {
    success: true,
    message: "This is my first API",
  };
  if (req.url === "/login") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    if (req.method === "GET") {
      res.end(
        JSON.stringify({
          success: true,
          message: "Login GET API Called",
        })
      );
    } else if (req.method === "POST") {
      res.end(
        JSON.stringify({
          success: true,
          message: "Login POST API Called",
        })
      );
    }
  } else if (req.url === "/logout") {
    res.end("Logout API Called");
  } else if (req.url === "/users-list") {
    res.end("Users list API Called");
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        success: false,
        message: "Route not found",
      })
    );
  }
};

const server = http.createServer(myServer);

server.listen(10000, () =>
  console.log(`Server is up and running at port 10000`)
);
