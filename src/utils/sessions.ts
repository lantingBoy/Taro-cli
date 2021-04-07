import Taro from '@tarojs/taro'

const Session = {
  get: function(SESSION_KEY: string) {
    return Taro.getStorageSync(SESSION_KEY) || null;
  },
  set: function(SESSION_KEY: string, session: any) {
    Taro.setStorageSync(SESSION_KEY, session);
  },
  clear: function(SESSION_KEY: string) {
    Taro.removeStorageSync(SESSION_KEY);
  }
}

export default Session