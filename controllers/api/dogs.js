const Dog = require('../../models/dog');

module.exports = {
    index,
    show
};

async function index(req, res) {
    const dogs = await Dog.find({});
    res.json(dogs);
}

async function show(req, res) {
    const dog = await Dog.findById(req.params.id);
    res.json(dog);
}