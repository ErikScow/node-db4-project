
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'breakfast',
          instructions: 'mix eggs and bacon in frying pan'
        },
        {
          name: 'lunch',
          instructions: 'spread peanut butter between bread slices'
        },
        {
          name: 'dinner',
          instructions: 'pour sauce over cooked noodles'
        }
      ]);
    });
};
