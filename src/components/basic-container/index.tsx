import React, { useContext} from 'react'

import { View, ScrollView } from '@tarojs/components'
import { GlobalContext } from "@store/global";
import Loading from "@comps/loading";
import { GlobalData } from "@store/interface";

import './index.less'

interface BasicContainerProps {
  footer?: React.ReactNode;
  header?: React.ReactNode;
  modal?: React.ReactNode;
  loading?: boolean;
  scrollDisabled?: boolean;
  className?: string;
  scrollIntoViewId?: string;
  onScroll?: (e) => void;
  onReachLower?: (e) => void;
}

//创建全局context

const BasicContainer: React.FC<BasicContainerProps> = function ({
  footer,
  children,
  header,
  scrollDisabled = false,
  loading = false,
  className: _className,
  scrollIntoViewId = '',
  modal,
  onScroll,
  onReachLower
}) {
  const { isIpx, themeColor, scrollTop = 0 }: GlobalData = useContext(GlobalContext)
  function handleScroll(e) {
    if (onScroll) {
      onScroll(e)
    }
  }
  function handleReachLower(e) {
    if (onReachLower) {
      onReachLower(e);
    }
   
  }

  return (
    <View className='basic-container skeleton g-flex-v g-flex g-w100 g-flex-between'>
      {header? <View className='containerHeader'>{header}</View>: null}
      <View className='g-flex-c1 g-pos-rt main-container overflow-hid'>
        <ScrollView
          scrollY={scrollDisabled !== true}
          scrollWithAnimation
          style={{height: '100%'}}
          className={_className}
          scrollTop={scrollTop}
          scrollIntoView={scrollIntoViewId}
          onScrollToLower={handleReachLower}
          onScroll={handleScroll}
        >
          {children}
        </ScrollView>
      </View>
      { footer? <View className={`container-footer ${isIpx? 'isIpx': ''}`}>{footer}</View>: null }
      <Loading showLoading={loading} color={themeColor} />
      { modal? <View>{modal}</View>: null }
    </View>
  )
}

export default BasicContainer
