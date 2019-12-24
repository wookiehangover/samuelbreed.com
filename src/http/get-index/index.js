const Main = require('@architect/views/main.js')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main()

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
