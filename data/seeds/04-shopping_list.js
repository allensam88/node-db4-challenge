
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {quantity: 2, unit: 'egg', recipe_id: 1, ingredient_id: 1},
        {quantity: 3, unit: 'strips', recipe_id: 1, ingredient_id: 2},
        {quantity: 2, unit: 'slice', recipe_id: 1, ingredient_id: 3},
        {quantity: 4, unit: 'slice', recipe_id: 2, ingredient_id: 4},
        {quantity: 2, unit: 'slice', recipe_id: 2, ingredient_id: 5},
        {quantity: 2, unit: 'slice', recipe_id: 2, ingredient_id: 6},
        {quantity: 1, unit: 'apple', recipe_id: 2, ingredient_id: 7},
        {quantity: 1, unit: 'bowl', recipe_id: 2, ingredient_id: 8},
        {quantity: 1, unit: 'filet', recipe_id: 3, ingredient_id: 9},
        {quantity: 1, unit: 'cup', recipe_id: 3, ingredient_id: 10},
        {quantity: 1, unit: 'bag', recipe_id: 3, ingredient_id: 11},
        {quantity: 5, unit: 'potatoes', recipe_id: 3, ingredient_id: 12}
      ]);
    });
};
