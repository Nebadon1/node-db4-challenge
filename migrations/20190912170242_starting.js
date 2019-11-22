exports.up = function(knex) {
  return knex.schema
    .createTable("dish", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("step_numbers")
        .unsigned()
        .notNullable();
      tbl.string("step_description").notNullable();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("dish")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .float("quantity", 2)
        .notNullable()
        .unsigned();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("dish")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name")
        .notNullable()
        .unique();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("dish");
};
