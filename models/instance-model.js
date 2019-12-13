const db = require('../database/db-config');
module.exports = {
    findByHackathon,
}

async function findByHackathon(hackathon_id) {
    return instances = await db('user_hackathons')
    .select('username', 'user_role')
    .join('users', 'user_id', 'users.id')
    .where({hackathon_id})
}