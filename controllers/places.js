const router = require('express').Router()

let places = [
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai_food.avif'
    },
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coding_cafe.avif'
    }
]


router.get('/', (req, res) => {
    res.render('places/index', { places })
})

module.exports = router