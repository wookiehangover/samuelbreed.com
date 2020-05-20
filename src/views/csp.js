const staticEdge = process.env.NODE_ENV === 'production'
  ? ` ${process.env.BEGIN_STATIC_EDGE}/` : ''

module.exports = [
  `default-src 'none'`,
  `script-src 'self' https://cdn.ampproject.org`,
  `connect-src 'self'`,
  `img-src 'self'${staticEdge}`,
  `style-src 'self' 'unsafe-inline'`,
    // `style-src 'self' 'sha256-DVVgTR/QdE8RSVAAnVcMRBvLaXqv+3YlxGzgSu8PlT4='`,
  `manifest-src 'self'${staticEdge}`
].join('; ')

