import React from 'react'
import { Image, type ImageStyle, StyleSheet, View, type ViewStyle } from 'react-native'


interface AvatarProps {
    url: string;
    size?: number,
    containerStyle?:ViewStyle
    style?:ImageStyle
}

export default function Avatar(props: AvatarProps) {
  const {url, size = 50, containerStyle,  style} = props;

  return (
    <View 
      style={{
        ...styles.container,
        height: size,
        width: size,
        borderRadius: size / 2,
        ...containerStyle
      }}>
      <Image 
        source={{uri: url}}
        style={{
          width: size,
          height: size,
          ...style,
        }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow:"hidden"
  },
  img:{
    resizeMode:"cover",
  }
})