const db = require('../database/db-config');
module.exports = {
    find,
    findById,
    findUserHackathons,
}

async function find() {
    return users = await  db('users')
}

async function findById(id) {
    return user = await db('users').where({id})
}

async function findUserHackathons(user_id) {
    return user_hackathons = await db.select('hackathon_name', 'username', 'user_role').from('user_hackathons')
    .join('hackathons','hackathon_id','hackathons.id')
    .join('users', 'user_id', 'users.id')
    .where({ user_id })
}