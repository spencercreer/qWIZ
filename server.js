const path = require('path')
const express = require('express')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const sequelize = require('./config/config')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))

sequelize.authenticate()
    .then(() => console.log('math_quiz_db connected...'))
    .catch(err => console.log('db.authenticate error: ' + err))

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
    sequelize.sync({ force: false })
})