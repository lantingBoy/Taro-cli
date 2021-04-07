import React, { useContext, useEffect } from 'react'
import { View } from '@tarojs/components'
import useSimpleRequest from '@hooks/usePost'
import { GlobalContext } from "@store/global";
import BasicContainer from '@comps/basic-container'
import NavBar from '@comps/nav-bar'
import './index.less'

export default (): React.ReactNode => {
  const [getList, pageLoading] = useSimpleRequest("/mn/c/coupon/myCouponList");
  console.log('pageLoading', pageLoading)
  const {isIpx}=useContext(GlobalContext)
  console.log('isIpx', isIpx)
  
  
  useEffect(() => {
    getList({}).then(res => {
      console.log(res)
    })
  },[getList])
  console.log(`${NavBar}`)
  return (
    <BasicContainer footer={<NavBar current={0} />}>
      <View>首页</View>
    </BasicContainer>
  )
}



