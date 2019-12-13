const userDb = require('../models/users-model');
const hackathonDb = require('../models/hackathon-model');
const router = require('express').Router();


router.get('/', async(req, res) => {
    try {
        const users = await userDb.find()
        res.status(200).json(users)
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const user = await userDb.findById(id)
        res.status(200).json(user)
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id/hackathons', async(req, res) => {
    const {id} = req.params;
    try {
        const userHackathons = await userDb.findUserHackathons(id)
        res.status(200).json(userHackathons)
    } catch(err) {
        console.log(err)
    }
})







module.exports = router;