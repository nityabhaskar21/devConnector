if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb+srv://manager:westpeas50@cluster0-iedxc.mongodb.net/test?retryWrites=true&w=majority',
    secretOrKey: 'secret'
  }
} else {
  module.exports = require('./keys_dev')
}

