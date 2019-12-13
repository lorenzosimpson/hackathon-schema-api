
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hackathons').del()
    .then(function () {
      // Inserts seed entries
      return knex('hackathons').insert([
        {hackathon_name: 'Hackathon A', hackathon_desc: 'this is hackathon A!'},
        {hackathon_name: 'Hackathon B', hackathon_desc: 'this is hackathon B!'},
        {hackathon_name: 'Hackathon C', hackathon_desc: 'this is hackathon C!'},
        {hackathon_name: 'Hackathon D', hackathon_desc: 'this is hackathon D!'},
        {hackathon_name: 'Hackathon E', hackathon_desc: 'this is hackathon E!'},
      ]);
    });
};
