const path = require('path')
const { readFileSync } = require('fs')
const html = readFileSync(path.join(__dirname, 'index.html'), 'utf8')
const staticAssetsHelper = (h) => h.replace(/\/_static\//g, `${process.env.BEGIN_STATIC_EDGE}/`)

module.exports = () => process.env.NODE_ENV === 'production' ? staticAssetsHelper(html) : html
