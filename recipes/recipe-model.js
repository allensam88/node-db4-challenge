const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getRecipeById,
    getShoppingList,
    getInstructions,
    addRecipe,
    updateRecipe,
    removeRecipe
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
    .join('ingredients', 'shopping_list.ingredient_id', 'ingredients.id')    
    .select('name','quantity', 'unit')
        .where('recipe_id', id)
}

function getInstructions(id) {
    return db('instructions')
        .select('step', 'description')
        .where('recipe_id', id)
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe, 'id')
        .then(ids => {
            const [id] = ids;
            return getRecipeById(id);
        });
}

function updateRecipe(changes, id) {
    return db('recipes')
        .where({ id })
        .update(changes)
        .then(count => {
            return getRecipeById(id);
        });
}

function removeRecipe(id) {
    const deletedRecipe = getRecipeById(id).then(item => item);
    return db('recipes')
        .where({ id })
        .del()
        .then(count => {
            return deletedRecipe
        });
}