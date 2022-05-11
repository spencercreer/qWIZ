const router = require('express').Router()
const { User } = require('../../models')
const { Highscore } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', async (req, res) => {
    try {
        const highscores = await Highscore.findAll({
            include: [User]
        })
        res.json(highscores)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newHighscore = await Highscore.create(req.body)
        res.json(newHighscore)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router