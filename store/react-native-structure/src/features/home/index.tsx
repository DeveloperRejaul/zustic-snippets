import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GStyles } from '@src/core/constance/styles'
import { typography } from '@src/core/constance/typography'
import { useTranslation } from '@src/core/i18n/i18'

export default function HomeScreen() {
  const {t} =  useTranslation()
  return (
    <View style={GStyles.centerFull}>
      <Text style={typography.title_2xl_bold}>{t('hello_world')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({ })  

