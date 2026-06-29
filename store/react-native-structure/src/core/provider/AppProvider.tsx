import React from 'react'
import {ActivityIndicator, View} from 'react-native'
import '@src/core/i18n/i18'
import { useTranslation } from '@src/core/i18n/i18'
import { GStyles } from '../constance/styles'

export default function AppProvider({children}: Readonly<{children: React.ReactNode}>) {
  const {isInitialLoading} =  useTranslation()

  if(isInitialLoading) {
    return (
      <View style={GStyles.centerFull}>
        <ActivityIndicator />
      </View>
    )
  }
  
  return (
    <View style={GStyles.flex}>
      {children}
    </View>
  )
}