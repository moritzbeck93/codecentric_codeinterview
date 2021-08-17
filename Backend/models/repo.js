module.exports = (sequelize, Sequelize) => {
    const Repo = sequelize.define("Repo", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(100)
        },
        programmiersprache: {
            type: Sequelize.STRING(100)
        },
        ersteller: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "Mitarbeiters",
                key: "id"
            }
        }

    });

    return Repo;
};