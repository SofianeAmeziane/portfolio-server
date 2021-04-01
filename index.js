const express = require("express");
const server = express();
const { ConnectionDb } = require("./DB/Connection");

async function runserver() {
  await ConnectionDb();
  const portfoliorouter = require("./routes/portfolios");
  const PORT = parseInt(process.env.PORT, 10) || 3001;

  server.use(express.json());
  server.use("/api/v1/portfolios", portfoliorouter);
  server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("port ready on :", PORT);
  });
}
runserver();
//comment
