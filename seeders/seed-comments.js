const db = require('../models')

// To use await, we need an async function.

function seed() {
    db.place_schema.findOne({ name: 'H-Thai-ML' })
        .then((place) => {
            db.comment_schema.create({
                author: 'Famished Fran',
                rant: false,
                stars: 5.0,
                content: 'Wow, simply amazing! Highly recommended!' 
            })
                .then((comment) => {
                    place.comments.push(comment)
                    place.save()
                        .then(() => { process.exit() })
                })
        })
        .catch((err) => { console.log(err) })
}

seed()