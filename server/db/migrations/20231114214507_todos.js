export function up(knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary()
    table.integer('priority')
    table.string('task')
    table.string('taskDetails')
    table.boolean('completed')
  })
}

export function down(knex) {
  knex.schema.dropTable('tasks')
}
