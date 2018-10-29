const express = require('express')
const router = express.Router();
const Book = require('../db').import('../models/book')

router.get('/', (req, res) => {
    Book.findAll()
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
    if(!req.errors) {
        const bookFromRequest = {
            nameOfBook: req.body.nameOfBook,
            author: req.body.author,
            genre: req.body.genre,
            pubYear: req.body.pubYear,
            rating: req.body.rating
        }
        Book.create(bookFromRequest)
            .then(book => res.status(200).json(book))
            .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})

router.get('/:nameOfBook', (req, res) => {
    Book.findOne({ where: { nameOfBook: req.params.nameOfBook }})
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json({ error: err }))
})

router.put('/:id', (req, res) => {
    if (!req.errors) {
        Book.update(req.body, {where: { id: req.params.id }})
            .then(book => res.status(200).json(book))
            .catch(err => res.json(req.errors))
    } else {
        res.status(500).json(req.errors)
    }
})

router.delete('/:id', (req, res) => {
    Book.destroy({ where: {id: req.params.id }})
        .then(book => res.status(200).json(book))
        .catch(err => res.status(500).json({ error: err}))
})

module.exports = router;