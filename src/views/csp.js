const staticEdge = process.env.BEGIN_STATIC_EDGE || ''

module.exports = [
  `default-src 'none'`,
  `script-src 'self'`,
  `connect-src 'self'`,
  `img-src 'self' ${staticEdge}`,
  `style-src 'self' 'sha256-Wd5QTAWValERuPK74eX4gF4bxsRa37Q35ccDTxeOCYk='`,
  `manifest-src 'self' ${staticEdge}`
].join('; ')
