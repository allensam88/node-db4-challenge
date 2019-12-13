
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'breakfast'},
        {id: 2, name: 'lunch'},
        {id: 3, name: 'dinner'}
      ]);
    });
};
