const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getRecipeById(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function getShoppingList(id) {
    return db('shopping_list')
        .select('quantity', 'unit')
        .where('recipe_id', id)
}

function getInstructions(id) {
    return db('instructions')
        .select('step', 'description')
        .where('recipe_id', id)
}
// function add(scheme) {
//     return db('schemes')
//         .insert(scheme, 'id')
//         .then(ids => {
//             const [id] = ids;
//             return findById(id);
//         });
// }

// function update(changes, id) {
//     return db('schemes')
//         .where({ id })
//         .update(changes)
//         .then(count => {
//             return findById(id);
//         });
// }

// function remove(id) {
//     const deletedSchema = findById(id).then(item => item);
//     return db('schemes')
//         .where({ id })
//         .del()
//         .then(count => {
//             return deletedSchema
//         });
// }