const User = require('./User')
const Highscore = require('./Highscore')

User.hasMany(Highscore, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Highscore.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = {
    User,
    Highscore
}