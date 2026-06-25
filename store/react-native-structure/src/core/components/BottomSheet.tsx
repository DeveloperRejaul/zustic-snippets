  
 
/* eslint-disable react-hooks/exhaustive-deps */
 
 
import React, { useEffect, useRef, useState} from 'react';
import { Animated, View, StyleSheet, useWindowDimensions, StatusBar, Pressable , Keyboard} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IShowParams {
    render: React.JSX.Element,
    duration?:number;
}
interface IHideParams {
    duration?:number;
}

interface IBottomSheet {
    show: (ele: IShowParams) => void;
    hide: (ele?:IHideParams) => void;
    isOpen?: boolean;
}

export const bottomSheet:IBottomSheet = { show: () => {}, hide: () => {} , isOpen: false };

export function BottomSheetContainer() {
  const { height: HEIGHT, width: WIDTH } = useWindowDimensions();
  const TOTAL_HEIGHT = (HEIGHT + (StatusBar?.currentHeight || 0));
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const [content, setContent] = useState<React.JSX.Element>();
  const {bottom} = useSafeAreaInsets()

  useEffect(() => {
    bottomSheet.show = function (ele) {
      bottomSheet.isOpen = true;
      if(Keyboard.isVisible()){
        Keyboard.dismiss()
      }
      
      setContent(ele.render);
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -TOTAL_HEIGHT,
          useNativeDriver: true,
          duration: ele.duration || 100,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          useNativeDriver: true,
          duration: ele.duration || 100,
        }),
      ]).start();
    };

    bottomSheet.hide = function (data) {
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          useNativeDriver: true,
          duration: data?.duration || 100,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          useNativeDriver: true,
          duration: data?.duration || 100,
        }),
      ]).start();
      setContent(<></>)
      bottomSheet.isOpen = false;
    };
  }, []);

  return (
    <Animated.View
      style={[styles.container, { height: TOTAL_HEIGHT, width: WIDTH, bottom: -TOTAL_HEIGHT, transform: [{ translateY }], zIndex: 1000 }]}
    >
      <Animated.View style={{ flex: 1, backgroundColor: '#0000003b', opacity }}>
        <Pressable
          style={{ flex: 1 }}
          onPress={() => bottomSheet.hide()}
        />
      </Animated.View>
      <View style={[styles.sheet, {paddingBottom: bottom}]}>
        <View style={styles.bar} />
        <StatusBar backgroundColor={'#0000003b'}/>
        {content}
      </View>
    </Animated.View>

  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'flex-end',
    backgroundColor:"transparent"
  },
  sheet: {
    backgroundColor: '#ffffff',
    padding: 10,
    overflow:"hidden"
  },
  bar: {
    width: 100,
    alignSelf: 'center',
    height: 5,
    borderRadius: 50,
    backgroundColor: '#7272722c',
  },
});

  