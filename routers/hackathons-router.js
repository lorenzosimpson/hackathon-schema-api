const hackathonsDb = require('../models/hackathon-model');
const usersDb = require('../models/users-model');
const instancesDb = require('../models/instance-model')
const router = require('express').Router()


router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try {
        let hackathon = await hackathonsDb.findById(id)
        hackathon.users = await instancesDb.findByHackathon(id)
        res.status(200).json(hackathon)
    } catch(err) {
        console.log(err)
    }
})


router.get('/name/:name', async(req, res) => {
    const {name} = req.params;
    try {
        const hackathons = await hackathonsDb.find()
        const filter = (arr, name) => {
            let new_arr = []
        
            for(let x = 0; x<arr.length; x++) {
                if (arr[x].hackathon_name.toLowerCase() === name.toLowerCase()) {
                    new_arr.push(arr[x])
                }
            } return res.status(200).json(new_arr)
        } 
        filter(hackathons, name)
        
    } catch(err) {
        console.log(err)
    }
})





module.exports = router;