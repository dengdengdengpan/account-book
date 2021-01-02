// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  chainWebpack: config => {
    const dir = path.resolve(__dirname, 'src/icons/svg')
    const svgoConfig = path.resolve(__dirname, 'src/icons/svgo.yml')

    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({ extract: false }).end()
      .use('svgo-loader').loader('svgo-loader').options({ externalConfig: svgoConfig }).end()
    config.plugin('svg-sprite').use('svg-sprite-loader/plugin', [{ plainSprite: true }])
    config.module.rule('svg').exclude.add(dir)  
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/styles/variable.scss";'
      }
    }
  }
}