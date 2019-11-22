exports.seed = function(knex, Promise) {
  return knex("steps").insert([
    {
      step_numbers: 1,
      step_description: "Grab Flour",
      recipe_id: 1
    }, // 1
    {
      step_numbers: 2,
      step_description: "Bake Pie",
      recipe_id: 1
    }, // 2
    {
      step_numbers: 1,
      step_description: "Grab Patty",
      recipe_id: 2
    }, // 3
    {
      step_numbers: 2,
      step_description: "Grill Patty",
      recipe_id: 2
    } // 4
  ]);
};
