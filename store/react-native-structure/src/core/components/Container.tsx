import * as React from "react"
import { View, type ViewProps } from "react-native"

interface ContainerProps extends ViewProps{
  children: React.ReactNode
}

export default function Container(props: ContainerProps) {
  const {
    children,
    style,
    ...extra
  } = props
  return (
    <View style={[style]} {...extra}>
      {children}
    </View>
  )
}
