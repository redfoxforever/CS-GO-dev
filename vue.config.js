const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'assets',
  filenameHashing: false,
  productionSourceMap: false
})
