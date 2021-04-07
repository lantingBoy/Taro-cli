/* eslint-disable import/no-commonjs */

const path = require('path')

const config = {
  projectName: 'myTaro',
  date: '2021-3-30',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
    C_TRACK_SR_TOKEN: null,
    C_TRACK_SENSORS_SERVER: null,
    C_WE_APP_ID: null,
    C_WE_APP_NAME: JSON.stringify('TTAD商城'),
    C_SERVER: null,
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@src': path.resolve(__dirname, '..', 'src'),
    '@comps': path.resolve(__dirname, '..', 'src/components'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@apis': path.resolve(__dirname, '..', 'src/apis'),
    '@store': path.resolve(__dirname, '..', 'src/store'),
  }
}


export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  if (process.env.NODE_ENV === 'qa') {
    return merge({}, config, require('./qa'))
  }
  if (process.env.NODE_ENV === 'pl') {
    return merge({}, config, require('./pl'))
  }
  return merge({}, config, require('./prod'))
}
