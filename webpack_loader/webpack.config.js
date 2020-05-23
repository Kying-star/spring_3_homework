const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /.js/,
        use: [
            {
                loader:path.resolve(__dirname, './loaders/replaceLoader.js'),
                options:{
                    name:'lqx'
                }  
            }
            
        ] // 引入自定义 loader
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}
