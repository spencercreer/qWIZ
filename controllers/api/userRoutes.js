const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async (req, res) => {
    let { email, password } = req.body
    try {
        const user = await User.create(req.body)

        if (!user) {
            return res.status(400).json({ message: 'There was an error creating the user' })
        }

        //TODO: implement session

        res.json(user)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router