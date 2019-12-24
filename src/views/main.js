const path = require('path')
const { readFileSync } = require('fs')
const html = readFileSync(path.join(__dirname, 'index.html'), 'utf8')
module.exports = () => html
