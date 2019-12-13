
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_hackathons').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_hackathons').insert([
        {hackathon_id: 1, user_id: 1, user_role: 'judge'},
        {hackathon_id: 2, user_id: 2, user_role: 'organizer'},
        {hackathon_id: 3, user_id: 1, user_role: 'judge'},
        {hackathon_id: 4, user_id: 2, user_role: 'participant'},
        {hackathon_id: 5, user_id: 3, user_role: 'organizer'},
        {hackathon_id: 5, user_id: 2, user_role: 'participant'},
      ]);
    });
};
