const express = require("express");
const path = require("path");

const PORT = 3003;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/assets"));

// handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "pages"));

// Routing
app.get("/", (req, res) => renderRoute(req, res, "index"));
app.get("/add-projects", (req, res) => renderRoute(req, res, "add-projects"));
app.get("/project", (req, res) => renderRoute(req, res, "project"));
app.get("/contact", (req, res) => renderRoute(req, res, "contact"));

// data from form
app.post("/get-form-data", (req, res) => {
  const {
    "project-name": projectName,
    "start-date": startDate,
    "end-date": endDate,
    technologies,
    Description,
  } = req.body;

  console.log(req.body);
  console.log(projectName, startDate, endDate, technologies, Description);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

function renderRoute(req, res, fileName) {
  res.render(fileName);
}
