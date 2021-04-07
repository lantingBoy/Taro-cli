import React, {useMemo} from 'react'
import { View } from '@tarojs/components'
import './index.less'

interface LoadingProps {
  showLoading: boolean;
  color?: string;
}

const Loading: React.FC<LoadingProps> = function ({ showLoading, color= 'red'}) {

  return useMemo(() => (
    <View className={`loading-comp ${showLoading ? 'active' : ''}`} >
      <View className='loading-box' />
      <View className='iconfont icon-loading s-fs-100' style={{color: color}} />
    </View>
  ), [showLoading, color])
}

export default Loading
