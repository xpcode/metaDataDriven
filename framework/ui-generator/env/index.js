import path from 'path'

import common_env, { combine } from '../../env'

const env = {
  PORTAL_LOG_DIR: path.join(__dirname, '../logs'),

  PORTAL_LOG_LEVEL: 'info',

  // nodejs 服务端口
  HTTP_SERVER_PORT: process.env.SERVER_PORT || 3003,
}

if (process.env.NODE_ENV === 'production') {
  Object.assign(env, {
    PORTAL_LOG_LEVEL: 'error',
    HTTP_HTML_BEAUTIFY: false,
    HTTP_SCRIPT_SUFFIX: '.min',
  })
}

export default env
export { combine }
