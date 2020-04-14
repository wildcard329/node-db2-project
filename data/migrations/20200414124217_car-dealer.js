
exports.up = function(knex) {
    return knex.schema.createTable('car-dealer', tbl => {
        tbl.increments('id');
        tbl.string('vin', 17).notNullable().index();
        tbl.string('make').notNullable().index();
        tbl.string('model').notNullable().index();
        tbl.decimal('mileage').notNullable().index();
        tbl.string('transmission type');
        tbl.string('title status');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealer')
};