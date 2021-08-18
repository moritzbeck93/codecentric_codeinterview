const express = require("express");
const cors = require("cors");

const app = express();

const Datenbank = require("./models");
const Mitarbeiter = Datenbank.mitarbeiter;

const service = require("./controllers/service");

const fetch = require('node-fetch');
const headers = {
    "authorization": "token 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"
}
const url = "https://api.github.com/orgs/codecentric/members"

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Test a simple route and give message back
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

const datenbank = require("./models");
datenbank.sequelize.sync();
//require("./routes/mitarbeiter")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


service.setMitarbeiter();



