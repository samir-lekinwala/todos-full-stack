export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      priority: '3',
      task: 'Eat KFC',
      taskDetails: 'Booked for 12pm with friend.',
      completed: false,
    },
    {
      priority: '5',
      task: 'Play golf',
      taskDetails: 'Booked for 8am Sunday.',
      completed: false,
    },
    {
      priority: '2',
      task: 'Do laundry',
      taskDetails: 'Do laundry on Sunday at 7am.',
      completed: false,
    },
    {
      priority: '1',
      task: 'Mow lawns',
      taskDetails: 'Mow lawns at 6am.',
      completed: false,
    },
    {
      priority: '4',
      task: 'Cook dinner',
      taskDetails: 'Making noodles for dinner',
      completed: false,
    },
  ])
}

// table.increments('id').primary()
// table.integer('priority')
// table.string('task')
// table.string('taskDetails')
// table.boolean('completed')
