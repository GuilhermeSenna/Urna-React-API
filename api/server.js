const express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;
mongoose = require("mongoose");
const uri = "mongodb://localhost/ NONME DO BD";
Candidate = require("./models/urnaModels"); // model loading here

//mongoose instance connection url connection

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("DB conected!");
  })
  .catch((err) => {
    console.log(Error, err.message);
  });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./routes/urnaRoutes"); // importing routes
routes(app); //register the router

app.get("*", (req, res) => {
  res.status(404).send({ url: req.originalUrl + "not found" });
});

app.listen(port);

console.log("Candidatos api RESTFULL MASTER server started on:" + port);
