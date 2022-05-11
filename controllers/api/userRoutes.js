const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)

        if (!user) {
            return res.status(400).json({ message: 'There was an error creating the user' })
        }

        req.session.save(() => {
            req.session.userId = user.id
            req.session.username = user.username
            req.session.loggedIn = true
        })

        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router