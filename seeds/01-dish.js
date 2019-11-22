exports.seed = function(knex, Promise) {
  return knex("dish").insert([
    {
      recipe_name: "Lemon Pie"
    }, // 1
    {
      recipe_name: "Burger"
    } // 2
  ]);
};
