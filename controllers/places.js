const router = require('express').Router()
let places = require('../models/places')

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    req.body.pic = req.body.pic || '/images/default_food.jpg'
    req.body.city = req.body.city || 'Anytown'
    req.body.state = req.body.state || 'USA'

    places.push(req.body)
    res.redirect('/places')
})

module.exports = router