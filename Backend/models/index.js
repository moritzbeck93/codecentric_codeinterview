const config = require("../config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,
});

const datenbank = {};

datenbank.Sequelize = Sequelize;
datenbank.sequelize = sequelize;

datenbank.mitarbeiter = require("../models/mitarbeiter.js")(sequelize, Sequelize);
datenbank.repos = require("../models/repo.js")(sequelize, Sequelize);
datenbank.language = require("../models/language.js")(sequelize, Sequelize);

module.exports = datenbank;