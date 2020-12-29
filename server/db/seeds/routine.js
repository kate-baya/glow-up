exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('routine').del()
    .then(function () {
      // Inserts seed entries
      return knex('routine').insert([
        { id: 1, time: '0630', task: 'Wake Up', importance: 'High', notification: true },
        { id: 2, time: '0745', task: 'Walk Dogs', importance: 'High', notification: true },
        { id: 3, time: '0819', task: 'Feed Dogs', importance: 'High', notification: false },
        { id: 4, time: '0830', task: 'Breakfast', importance: 'Medium', notification: true }
      ])
    })
}
