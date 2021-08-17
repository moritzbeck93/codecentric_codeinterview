module.exports = (sequelize, Sequelize) => {
    const Mitarbeiter = sequelize.define("Mitarbeiter", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(50)
        }
    });

    return Mitarbeiter;
};