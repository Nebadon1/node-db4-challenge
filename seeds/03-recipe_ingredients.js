exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients").insert([
    {
      quantity: 1,
      recipe_id: 1,
      ingredient_id: 1
    }, // 1
    {
      quantity: 2,
      recipe_id: 1,
      ingredient_id: 2
    }, // 2
    {
      quantity: 4,
      recipe_id: 2,
      ingredient_id: 3
    }, // 3
    {
      quantity: 3,
      recipe_id: 2,
      ingredient_id: 4
    } // 4
  ]);
};
