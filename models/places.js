const mongoose = require('mongoose')

const place_schema = new mongoose.Schema({
    name:     { type: String, required: true },
    pic:      { type: String, default: '/images/default_food.jpg' },
    cuisines: { type: String, required: true },
    city:     { type: String, default: 'Anytown' },
    state:    { type: String, default: 'USA' },
    founded:  { 
        type: Number, 
        min: [1673, "Surely not that old..."],
        max: [new Date().getFullYear(), "Can't be in the future!"]
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

place_schema.methods.showEstablished = function() {
    return `${this.name}, serving ${this.city}, ${this.state} ${this.cuisines} since ${this.founded}`
}

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