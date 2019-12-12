
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'eggs'},
        {id: 2, name: 'bacon'},
        {id: 3, name: 'toast'},
        {id: 4, name: 'ham'},
        {id: 5, name: 'cheese'},
        {id: 6, name: 'bread'},
        {id: 7, name: 'apple'},
        {id: 8, name: 'chips'},
        {id: 9, name: 'salmon'},
        {id: 10, name: 'rice'},
        {id: 11, name: 'vegetables'},
        {id: 12, name: 'potatoes'}
      ]);
    });
};
