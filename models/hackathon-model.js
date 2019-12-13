const db = require('../database/db-config');
module.exports = {
    find,
    findById,
}

async function find() {
   return hackathons = await db('hackathons')
}

async function findById(id) {
    return hackathon = await db('hackathons').where({id}).first()
}


