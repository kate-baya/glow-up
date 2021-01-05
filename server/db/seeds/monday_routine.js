
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('monday_routine').del()
    .then(function () {
      // Inserts seed entries
      return knex('monday_routine').insert([
        {id: 1, day: 'Monday', date: '1/1/2021', time: '7:00am', task: 'Wake up'},
        {id: 2, day: 'Tuesday', date: '1/1/2021', time: '8:00am', task: 'Breakfast'},
        {id: 3, day: 'Wednesday', date: '1/1/2021', time: '9:00am', task: 'Work'},
      ]);
    });
};
