require('dotenv').config();
require('./config/database');

const Dog = require('./models/dog');

//Pattern: IIFE
(async function() {

    await Dog.deleteMany({});
    const dogs = await Dog.create([
        {name: 'Buddy', breed: 'Golden Retriever', city: 'San Diego', price: 1000},
        {name: 'Charlie', breed: 'Labrador Retriever', city: 'San Diego', price: 1200},
        {name: 'Max', breed: 'German Shepherd', city: 'San Diego', price: 1500},
        {name: 'Oscar', breed: 'French Bulldog', city: 'San Diego', price: 2000},
        {name: 'Milo', breed: 'Beagle', city: 'San Diego', price: 800},
        {name: 'Archie', breed: 'Poodle', city: 'San Diego', price: 1000},
        {name: 'Ollie', breed: 'Rottweiler', city: 'San Diego', price: 1200},
        {name: 'Toby', breed: 'Chihuahua', city: 'San Diego', price: 1500},
        {name: 'Jack', breed: 'Pug', city: 'San Diego', price: 2000},
        {name: 'Teddy', breed: 'Siberian Husky', city: 'San Diego', price: 800},
    ]);

    console.log(dogs);

    process.exit();

})();