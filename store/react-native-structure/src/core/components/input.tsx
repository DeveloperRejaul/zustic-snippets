import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TextInput, type TextInputProps, TouchableOpacity, View, type ViewStyle } from 'react-native'
import { bottomSheet } from './BottomSheet';
import { colors } from '../constance/colors';
import { GStyles } from '../constance/styles';
import { typography } from '../constance/typography';
import SelectBottomSheet from './bottom-sheet/select-bottom-sheet';
import useQueryState from '../hooks/useQueryState';
import ArrowRightIos from '../assets/icons/ArrowRightIos';

interface InputProps extends TextInputProps {
    variant?:"password" | "text" | 'textarea' | "select",
    minHeight?:number,
    footer?: React.ReactNode,
    label?:string;
    onSelect?:(d:any) => void
    selectData?:{id:string, title:string}[],
    defaultSelect?:{id:string, title:string};
    error?:string
    bodyStyle?:ViewStyle
    containerStyle?:ViewStyle
}

export default function Input(props: InputProps) {
  const {
    variant = 'text',
    minHeight,
    style,
    footer,
    label,
    selectData,
    value,
    onSelect,
    onChangeText,
    error,
    defaultSelect,
    bodyStyle,
    containerStyle,
    ...extra
  } = props;
  
  const [inputValue, setInputValue] = useQueryState(value || defaultSelect?.title|| selectData?.[0]?.title || "");
  const activeSelectId = useRef<string>(defaultSelect?.id || selectData?.[0]?.id)

  useEffect(()=>{
    activeSelectId.current = defaultSelect?.id || selectData?.[0]?.id || "";
  },[defaultSelect, selectData])
 
  const showBottomSheet = () => {
    if((selectData?.length || 0) <= 0) {
      return
    }
    bottomSheet.show({
      duration: 400,
      render: (
        <SelectBottomSheet 
          data={selectData ||[]}
          active={activeSelectId.current}
          onChange={(id, d) => {
            setInputValue(d?.title || "");
            activeSelectId.current = id as string;
            onSelect?.(d);
          }}
        />
      )
    })
  }

  const getLeftIcon = ():React.ReactNode => {
    switch (variant) {
    case 'select':
      return (
        <View 
          style={{padding:5}}
        >
          <ArrowRightIos style={{transform:[{rotate:"90deg"}]}} color={colors.black}/>
        </View>
      )
    default:
      return <></>
    }
  }

  return (
    <View style={{flexGrow: 1, rowGap: 4, ...containerStyle}}>
      {label ? <Text style={typography.text_xs_medium}>{label}</Text>: null}
      <View style={{...styles.container,...bodyStyle}}>
        <TouchableOpacity style={GStyles.row}
          activeOpacity={variant === "select" ? 0.2 : 1}
          onPress={()=>{
            if(variant === "select"){
              showBottomSheet();
            }
          }}
        >
          <TextInput 
            editable={variant !== "select"}
            multiline={variant === 'textarea'}
            style={[styles.input, {minHeight}, style]}
            defaultValue={inputValue}
            value={inputValue}
            onChangeText={(v) => {
              setInputValue(v);
              onChangeText?.(v);
            }}
            {...extra}
          />
          {getLeftIcon()}
        </TouchableOpacity>
        {footer}
      </View>
      {error ? <Text style={[typography.text_xs_medium,{color:"#b50c0c"}]}>{error}</Text>: null}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.weight,
    padding: 10,
    borderRadius: 10,
  },
  input:{
    flexGrow:1,
  }
})