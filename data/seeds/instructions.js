
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 1, description: 'slow cook bacon', recipe_id: 1},
        {id: 2, step: 2, description: 'fry eggs', recipe_id: 1},
        {id: 3, step: 3, description: 'start toaster', recipe_id: 1},
        {id: 4, step: 1, description: 'make ham & cheese sandwich', recipe_id: 2},
        {id: 5, step: 2, description: 'slice apple', recipe_id: 2},
        {id: 6, step: 3, description: 'get bowl of chips', recipe_id: 2},
        {id: 7, step: 1, description: 'cook rice', recipe_id: 3},
        {id: 8, step: 2, description: 'bake salmon', recipe_id: 3},
        {id: 9, step: 3, description: 'steam vegetables', recipe_id: 3},
        {id: 10, step: 4, description: 'mash & heat the potatoes', recipe_id: 3}
      ]);
    });
};
