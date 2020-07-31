
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients-intermediary').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients-intermediary').insert([
        {
          recipe_id: 1,
          ingredient_id:1,
          ingredient_quantity: 2
        },
        {
          recipe_id: 1,
          ingredient_id:2,
          ingredient_quantity: 2
        },
        {
          recipe_id: 2,
          ingredient_id:3,
          ingredient_quantity: 2.3
        },
        {
          recipe_id: 2,
          ingredient_id:4,
          ingredient_quantity: 2
        },
        {
          recipe_id: 3,
          ingredient_id:5,
          ingredient_quantity: 2.5
        },
        {
          recipe_id: 3,
          ingredient_id:6,
          ingredient_quantity: 2.5
        }
      ]);
    });
};
