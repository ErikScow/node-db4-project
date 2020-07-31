
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name:'eggs'},
        {name: 'bacon'},
        {name: 'peanut butter'},
        {name: 'bread slices'},
        {name: 'sauce'},
        {name: 'cooked noodles'}
      ]);
    });
};
