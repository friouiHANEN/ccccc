const express = require("express");

const app = express();
const DBconnect = require("./routes/dbconnect");
DBconnect();
app.use(express.json());
const PORT = 5000;
app.use("/food", require("./routes/food"));
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("mriguel 3alle5er 😘👍💖✌");
});
