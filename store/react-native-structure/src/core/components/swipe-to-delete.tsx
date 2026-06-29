import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withTiming,
} from 'react-native-reanimated'

interface SwipeToDeleteProps {
  children: React.ReactNode
  onRemove: () => void
}

const MAX_SWIPE = -120

export default function SwipeToDelete({
  children,
  onRemove,
}: SwipeToDeleteProps) {
  const translateX = useSharedValue(0)
  const startX = useSharedValue(0)

  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .failOffsetY([-10, 10]) 
    .onStart(() => {
      startX.value = translateX.value
    })
    .onUpdate((e) => {
      let next = startX.value + e.translationX

      // clamp swipe range
      if (next > 0) next = 0
      if (next < MAX_SWIPE) next = MAX_SWIPE

      translateX.value = next
    })
    .onEnd((e) => {
      // if fast swipe OR passed half → open
      const shouldOpen =
        translateX.value < MAX_SWIPE / 2 || e.velocityX < -500

      translateX.value = withTiming(
        shouldOpen ? MAX_SWIPE : 0,
        {
          duration: 300
        }
      )
    })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const handleDelete = () => {
    runOnJS(onRemove)()
  }

  return (
    <View style={styles.container}>
      {/* BACKGROUND DELETE */}
      <View style={styles.deleteContainer}>
        <Pressable onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>

      {/* FOREGROUND */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  card: {
    backgroundColor: '#fff',
  },
  deleteContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'red',
  },
  deleteButton: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})