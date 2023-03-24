const mongoose = require('mongoose')

const place_schema = new mongoose.Schema({
    name:     { type: String, required: true },
    pic:      { type: String, default: '/images/default_food.jpg' },
    cuisines: { type: String, required: true },
    city:     { type: String, default: 'Anytown' },
    state:    { type: String, default: 'USA' },
    founder:  Number,
})

module.exports = mongoose.model('place_schema', place_schema)

// DELETE THIS!
// -------------------
// module.exports = [
//     {
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: '/images/thai_food.avif'
//     },
//     {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: '/images/coding_cafe.avif'
//     }
// ]