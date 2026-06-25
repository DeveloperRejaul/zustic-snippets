import React, { type ReactNode } from 'react'
import { ActivityIndicator, type ViewStyle } from 'react-native'

interface ScreenLoadingProps {
    isLoading:boolean,
    children:ReactNode,
    loadingStyle?:ViewStyle
}


export default function ScreenLoadingContainer(props: ScreenLoadingProps) {
  const {isLoading, children, loadingStyle} = props
  if(isLoading) {
    return <ActivityIndicator style={loadingStyle} size="large" color="#FE761C" />
  }
  return children
}