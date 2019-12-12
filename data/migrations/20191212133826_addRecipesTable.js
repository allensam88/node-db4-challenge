
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 100).notNullable().unique();
    })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 100).notNullable().unique();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('step', 3).notNullable();
            tbl.string('description', 100).notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('shopping_list', tbl => {
            tbl.primary(['recipe_id', 'ingredient_id']);
            tbl.float('quantity');
            tbl.string('unit', 100);
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function (knex) {

};
