module.exports = {
  development: {
    __STANDALONE_MODE__: true
  },
  test: {
    __STANDALONE_MODE__: true
  },
  staging: {
    __STANDALONE_MODE__: false
  },
  qa: {
    __STANDALONE_MODE__: false
  },
  production: {
    __STANDALONE_MODE__: false
  }
}
