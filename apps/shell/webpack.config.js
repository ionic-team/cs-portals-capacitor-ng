const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

console.log(process.env.CAP_BUILD);

// eslint-disable-next-line no-constant-condition
const remotes = true ? {
  "account": "account/remoteEntry.js",
  "help": "help/remoteEntry.js"
} : {
  "account": "http://localhost:4201/remoteEntry.js",
  "help": "http://localhost:4202/remoteEntry.js"
}

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes,
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
