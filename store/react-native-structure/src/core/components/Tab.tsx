import React, { type FC, useState } from 'react'
import {StyleSheet,Text,type TextStyle, TouchableOpacity, View, type ViewProps, type ViewStyle } from 'react-native'
import { colors } from '@src/core/constance/colors'
import { PADDING_HORIZONTAL, WIDTH } from '@src/core/constance/size'
import { GStyles } from '@src/core/constance/styles'
import { typography } from '@src/core/constance/typography'

interface TabProps {
  pages: {
    title: string;
    titleStyle?:TextStyle
    component: FC<ViewProps>;
    style?:ViewStyle
  }[]
  initialPage?: number,
  style?:ViewStyle,
  containerStyle?:ViewStyle,
  btnContainerStyle?:ViewStyle,
}


export default function Tab(props: TabProps) {
  const { pages, initialPage = 0 , style, btnContainerStyle, containerStyle} = props;
  const PAGE_SIZE = WIDTH - (PADDING_HORIZONTAL*2)
  const BTN_WIDTH = PAGE_SIZE / pages.length
  const [active, setActive] = useState(initialPage)

  const Page = pages[active].component

  return (
    <View style={[GStyles.flex, style, containerStyle]}>
      <View style={[GStyles.rowBetween, btnContainerStyle, styles.btnContainer]}>
        {pages.map((Pg, index) => {
          return (
            <TouchableOpacity 
              onPress={() => {
                setActive(index)
              }}
              key={Pg.title} 
              style={[
                {width:BTN_WIDTH, backgroundColor: active ===  index ?'#248F65' : '#00000000' },
                GStyles.center,
                styles.btn
              ]}
            >
              <Text style={[
                typography.text_md_bold,
                Pg.titleStyle,
                {color:  active ===  index ? '#fff' :'#000'}
              ]}>
                {Pg.title}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <Page/>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer:{
    borderBottomWidth: 1,
    borderBottomColor: colors.green100,
    marginHorizontal: PADDING_HORIZONTAL
  },
  btn:{
    paddingVertical: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  row:{
    flexDirection:"row"
  }
});
