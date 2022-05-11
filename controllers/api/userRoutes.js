const router = require('express').Router()
const { User } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', withAuth, async (req, res) => {
    console.log(req.session.loggedIn)
    res.status(400).json({ message: 'Something went wrong' })
})

router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)

        if (!user) {
            return res.status(400).json({ message: 'There was an error creating the user' })
        }

        req.session.user = {
            userId: user.id,
            username: user.username,
        }

        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router