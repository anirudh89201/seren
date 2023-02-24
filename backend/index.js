const connectToMongo = require("./db");
var cors = require("cors");
connectToMongo();
const express = require("express");
const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());
app.use("/", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
