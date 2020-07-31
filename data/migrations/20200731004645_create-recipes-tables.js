
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('name')
            .notNullable()
            .unique()
        tbl.string('instructions')
            .notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('name')
            .notNullable()
    })
    .createTable('recipe-ingredients-intermediary', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
        tbl.float('ingredient_quantity')
            .notNullable()
        tbl.primary(['recipe_id', 'ingredient_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe-ingredients-intermediary')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
