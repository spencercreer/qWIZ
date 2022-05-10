const { Sequelize, Model, DataTypes } = require('sequelize')

class Highscore extends Model { }

Highscore.init(
    {
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize
    }
)

module.exports = Highscore