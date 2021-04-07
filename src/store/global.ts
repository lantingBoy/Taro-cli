import { createContext,useReducer } from "react";

import { GlobalData, ContextAction } from './interface'

/* 全局初始数据 */
export const globalData:GlobalData = {
  isIpx:false
}

export const GlobalContext = createContext(globalData)

export const globalReduce = (state: any, action: ContextAction): GlobalData => {
  state = {...state}
  const { type, payload } = action
  switch(type) {
    case 'update':
      if (typeof payload !== 'object') break;
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
      break;
    case 'delete':
      if (Array.isArray(payload) && payload.length) {
        payload.forEach(key => {
          delete state[key]
        })
      } else if (typeof payload === 'string') {
        delete state[payload]
      }
      break;
    default:
      return state
  }
  return { ...state }
}


export function useAction() {
  const [state, dispatch] = useReducer(globalReduce, globalData)

  return { state, dispatch }
}
