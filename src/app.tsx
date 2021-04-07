import React, { useEffect } from 'react'
import { GlobalContext, useAction } from '@store/global'
import Taro from '@tarojs/taro'

import './app.less'

export default (props): React.ReactNode => {
  const { state, dispatch } = useAction()
  useEffect(() => {
    getSystemInfo()
  },[])

  const getSystemInfo = () => {
    Taro.getSystemInfo({
      success(res) {
        dispatch({
          type: 'update',
          payload: {
            isIpx: res.model.indexOf('iPhone X') >= 0 || res.model.indexOf('iPhone 1') >= 0
          }
        })
      }
    });
  }
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

 
