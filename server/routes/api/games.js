const express = require('express');
const router = express.Router();
const Game = require('../../models/Game');


router.get('/', (req, res) => {
    Game.find()
    .then((games) => res.json(games))
    .catch((err) => res.status(404).json({ noitemsfound: 'No games found'}));
});

router.get('/:id', (req, res) => {
    Game.findById(req.params.id)
    .then((game) => res.json(game))
    .catch((err) => res.status(404).json({ noitemfound: 'No game found'}));
});

router.post('/', (req, res) => {
    Game.create(req.body)
    .then((game) => res.json({ msg: 'game added successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add game' }));
});

router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body)
    .then((game) => res.json({ msg: 'updated successfully' }))
    .catch((err) => res.status(400).json({ error: "unable to update database" }));
});

router.delete('/:id', (req, res) => {
    Game.findByIdAndDelete(req.params.id)
    .then((item) => res.json({ msg: 'game entry deleted successfully' }))
    .catch((err) => res.status(404).json({ error: 'unable to locate game entry' }));
});

module.exports = router;