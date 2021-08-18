module.exports = (sequelize, Sequelize) => {
    const Repo = sequelize.define("Programmiersprache", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        sprache: {
            type: Sequelize.STRING(100)
        },
        mitarbeiter: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "Mitarbeiters",
                key: "id"
            }
        },
        repo: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: "Repos",
                key: "id"
            }
        }

    });
}