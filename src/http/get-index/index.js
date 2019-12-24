const Main = require('@architect/views/main.js')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main()

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-security-policy': `default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self' 'sha256-Wd5QTAWValERuPK74eX4gF4bxsRa37Q35ccDTxeOCYk=';`
    },
    body
}
}
