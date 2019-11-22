exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    {
      ingredient_name: "Flour"
    }, // 1
    {
      ingredient_name: "Lemon"
    }, // 2
    {
      ingredient_name: "Meat"
    }, // 3
    {
      ingredient_name: "Bread"
    } // 4
  ]);
};
