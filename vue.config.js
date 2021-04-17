module.exports = {
  configureWebpack: {
    entry: './src/client/main.ts',
  },
  outputDir: 'dist/client',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3500',
      },
    }
  }
}