const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const remotes = process.env.CAP_BUILD ? {
  "account": "/account/remoteEntry.js",
  "help": "/help/remoteEntry.js",
  "checkout": "/checkout/remoteEntry.js"
} : {
  "account": "http://localhost:4201/remoteEntry.js",
  "help": "http://localhost:4202/remoteEntry.js",
  "checkout": "http://localhost:4203/remoteEntry.js"
}

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes,
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
