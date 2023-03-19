const React = require('react')
const Default = require('./default')

function Error404() {
    return (
        <Default>
            <main>
                <h1>404 Page Not Found</h1>
                <p>This page doesn't exist</p>
            </main>
        </Default>
    )
}

module.exports = Error404