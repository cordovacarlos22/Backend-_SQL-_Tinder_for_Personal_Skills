/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries in the 'users' table
  await knex('users').del();

  // Inserts seed entries (20 dummy users)
  await knex('users').insert([
    { name: 'John Doe', email: 'john.doe@example.com', password: 'hashedpassword123', hourly_rate: 25.00, average_rating: 4.50, role: 'user', created_at: knex.fn.now() },
    { name: 'Jane Smith', email: 'jane.smith@example.com', password: 'hashedpassword456', hourly_rate: 30.00, average_rating: 4.85, role: 'user', created_at: knex.fn.now() },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'hashedpassword789', hourly_rate: 40.00, average_rating: 4.20, role: 'user', created_at: knex.fn.now() },
    { name: 'Bob Brown', email: 'bob.brown@example.com', password: 'hashedpassword987', hourly_rate: 35.00, average_rating: 3.90, role: 'user', created_at: knex.fn.now() },
    { name: 'Carol White', email: 'carol.white@example.com', password: 'hashedpassword654', hourly_rate: 50.00, average_rating: 4.95, role: 'admin', created_at: knex.fn.now() },
    { name: 'David Black', email: 'david.black@example.com', password: 'hashedpassword321', hourly_rate: 45.00, average_rating: 4.00, role: 'user', created_at: knex.fn.now() },
    { name: 'Emily Green', email: 'emily.green@example.com', password: 'hashedpassword741', hourly_rate: 20.00, average_rating: 4.75, role: 'user', created_at: knex.fn.now() },
    { name: 'Frank Blue', email: 'frank.blue@example.com', password: 'hashedpassword852', hourly_rate: 60.00, average_rating: 3.50, role: 'user', created_at: knex.fn.now() },
    { name: 'Grace Yellow', email: 'grace.yellow@example.com', password: 'hashedpassword963', hourly_rate: 55.00, average_rating: 4.30, role: 'admin', created_at: knex.fn.now() },
    { name: 'Henry Gold', email: 'henry.gold@example.com', password: 'hashedpassword159', hourly_rate: 35.00, average_rating: 4.10, role: 'user', created_at: knex.fn.now() },
    { name: 'Isabel Silver', email: 'isabel.silver@example.com', password: 'hashedpassword357', hourly_rate: 25.00, average_rating: 4.90, role: 'user', created_at: knex.fn.now() },
    { name: 'Jake Copper', email: 'jake.copper@example.com', password: 'hashedpassword258', hourly_rate: 45.00, average_rating: 4.50, role: 'user', created_at: knex.fn.now() },
    { name: 'Kathy Bronze', email: 'kathy.bronze@example.com', password: 'hashedpassword147', hourly_rate: 40.00, average_rating: 4.70, role: 'admin', created_at: knex.fn.now() },
    { name: 'Larry Pink', email: 'larry.pink@example.com', password: 'hashedpassword369', hourly_rate: 32.00, average_rating: 3.85, role: 'user', created_at: knex.fn.now() },
    { name: 'Monica Purple', email: 'monica.purple@example.com', password: 'hashedpassword1234', hourly_rate: 38.00, average_rating: 4.65, role: 'user', created_at: knex.fn.now() },
    { name: 'Nathan Red', email: 'nathan.red@example.com', password: 'hashedpassword5678', hourly_rate: 48.00, average_rating: 4.25, role: 'user', created_at: knex.fn.now() },
    { name: 'Olivia Brown', email: 'olivia.brown@example.com', password: 'hashedpassword91011', hourly_rate: 52.00, average_rating: 3.95, role: 'admin', created_at: knex.fn.now() },
    { name: 'Paul White', email: 'paul.white@example.com', password: 'hashedpassword1213', hourly_rate: 20.00, average_rating: 4.80, role: 'user', created_at: knex.fn.now() },
    { name: 'Quincy Black', email: 'quincy.black@example.com', password: 'hashedpassword1415', hourly_rate: 55.00, average_rating: 4.35, role: 'user', created_at: knex.fn.now() },
    { name: 'Rachel Orange', email: 'rachel.orange@example.com', password: 'hashedpassword1617', hourly_rate: 42.00, average_rating: 4.50, role: 'user', created_at: knex.fn.now() }
  ]);
};