 
import  { useState, useCallback } from 'react'
import Taro from '@tarojs/taro'
import Session from '@utils/sessions'

const useSimpleRequest = (url: string): [(data?: any) => Promise<unknown>, boolean] => {
  const [loading, setLoading] = useState<boolean>(false);
  url = C_SERVER + url
  /**
   * 请求
   * @param data 请求入参
   */
  const request = useCallback((data = {}) => {
    setLoading(true)
    return new Promise((resolve, reject) => {
      Taro.request({
        url,
        data,
        method: 'POST',
        dataType: 'json',
        header: {
          'content-type': 'application/json', // 默认值
          'MN-WX-XCX-TOKEN': Session.get('WX_TOKEN') || ''
        },
        retryTimes: 3,
        timeout: 10000,
      }).then(res => {
          const {data : result} = res || {}
          const {errcode, data:datas, errmsg} = result
          if(errcode === '0') {
            resolve(datas || {})
          } else {
            reject(result)
            Taro.showToast({
              icon: 'none',
              title: errmsg || '请求失败，请稍后重试',
            })
          }
          setLoading(false)
      }).catch(err => {
          setLoading(false)
          reject(err)
      })
    })
  }, [url])

  return [request, loading]
}

export default useSimpleRequest