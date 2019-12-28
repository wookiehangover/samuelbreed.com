const Main = require('@architect/views/main.js')
const csp = require('@architect/views/csp.js')

// Customize your site by changing the data below
exports.handler = async function Index (request) {
  let body = Main()

    if (request.path === '/robots.txt') {
        return {
            headers: {
                'content-text': 'text/plain; charset=utf8'
            },
            body: `User-agent: *
Disallow:`
        }
    }

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-security-policy': csp
    },
    body
}
}
