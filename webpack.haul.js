module.exports = ({ platform }, { module }) => ({
  entry: `./index.js`,
  module: {
    ...module,
    rules: [
      {
        test: /\.js?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      ...module.rules,
    ],
  },
});

