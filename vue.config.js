const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false ,
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }，
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws:true,
        changeOrigin:true
      } ,
      // '/foo':{
      //   target:'<o>'
      // }
    }
  }
})
