export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      priority: '3',
      task: 'Eat KFC',
      task_Details: 'Booked for 12pm with friend.',
      completed: false,
    },
    {
      priority: '5',
      task: 'Play golf',
      task_Details: 'Booked for 8am Sunday.',
      completed: false,
    },
    {
      priority: '2',
      task: 'Do laundry',
      task_Details: 'Do laundry on Sunday at 7am.',
      completed: false,
    },
    {
      priority: '1',
      task: 'Mow lawns',
      task_Details: 'Mow lawns at 6am.',
      completed: false,
    },
    {
      priority: '4',
      task: 'Cook dinner',
      task_Details: 'Making noodles for dinner',
      completed: false,
    },
  ])
}

// table.increments('id').primary()
// table.integer('priority')
// table.string('task')
// table.string('task_Details')
// table.boolean('completed')
