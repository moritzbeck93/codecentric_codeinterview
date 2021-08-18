module.exports = app => {
    const service = require("../controllers/service.js");

    var router = require("express").Router();

    // Finde alle Mitarbeiter
    router.get("/mitarbeiter", service.findAllMitarbeiter);

    app.use('/', router);
};