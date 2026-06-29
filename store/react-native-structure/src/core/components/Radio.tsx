
 
import { createContext, useContext } from 'react';
import React from 'react'
import { StyleSheet, Text, type TextStyle, TouchableOpacity, View, type ViewProps, type ViewStyle } from 'react-native';
import useQueryState from '../hooks/useQueryState';

export interface IRadioProps {
    size?: number;
    inActiveColor?: string;
    activeColor?: string;
    inValidColor?: string;
    label?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    onChange?: (value: string, extra?:any) => void;
    borderStyle?: ViewStyle
    borderActiveStyle?: ViewStyle
    borderInactiveStyle?: ViewStyle
    ballStyle?: ViewStyle
    ballActiveStyle?: ViewStyle
    ballInactiveStyle?: ViewStyle
    containerStyle?: ViewStyle
    containerActiveStyle?: ViewStyle
    containerInactiveStyle?: ViewStyle
    labelStyle?: TextStyle
    labelActiveStyle?: TextStyle
    labelInactiveStyle?: TextStyle
    text?: string;
    gap?: number
    textStyle?: TextStyle
    textActiveStyle?: TextStyle
    textInactiveStyle?: TextStyle
    value: string;
    extraValue?:any
}
export interface IContextRadioGroup {
    setActiveValue: React.Dispatch<React.SetStateAction<string>>;
    activeValue: string
    onChange?: (value: string, extra:any) => void;
}

export interface IRadioGroup extends ViewProps {
    onChange?: (value: string, extra:any) => void;
    children: React.ReactNode;
    defaultActive?: string;
}

export const Context = createContext<IContextRadioGroup>({} as IContextRadioGroup);

export function RadioGroup(props: IRadioGroup) {
  const [activeValue, setActiveValue] = useQueryState(props.defaultActive ? props.defaultActive : '');
  const { onChange, children, style, ...extra } = props || {};
  return (
    <Context.Provider value={{ activeValue, setActiveValue, onChange }}>
      <View 
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row', 
          ...style
        }} 
        {...extra}>
        {children}
      </View>
    </Context.Provider>
  );
}


export function Radio(props: IRadioProps) {
  const color = {
    primary: '#1E88E5',
    dark: '#000000',
    active: '#43A047'
  }

  const {
    size = 25,
    inActiveColor = color.dark,
    activeColor = color.active,
    inValidColor = color.primary,
    borderStyle,
    ballStyle,
    ballActiveStyle,
    ballInactiveStyle,
    borderActiveStyle,
    borderInactiveStyle,
    containerStyle,
    containerActiveStyle,
    containerInactiveStyle,
    labelStyle,
    labelActiveStyle,
    labelInactiveStyle,
    value,
    isDisabled,
    isInvalid,
    label,
    onChange: radioOnChange,
    text,
    gap = 0.6,
    textActiveStyle,
    textInactiveStyle,
    textStyle,
    extraValue,
  } = props;

  const { activeValue, setActiveValue, onChange } = useContext(Context);

  const BOX_SIZE = size * gap;
  const BOX_RADIUS = BOX_SIZE / 2;
  const CONTAINER_RADIUS = size * 0.5;
  const BORDER_WIDTH = size * 0.1;
  const DISABLE_OPACITY = 0.5;
  const isActive = activeValue === value;
  
  return (
    <TouchableOpacity
      onPress={isDisabled
        ? () => { }
        : () => {
          setActiveValue(value);
          onChange?.(value, extraValue);
          radioOnChange?.(value, extraValue);
        }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[{
        ...styles.btn,
        opacity: isDisabled ? DISABLE_OPACITY : 1,
        ...containerStyle,
      }, isActive ? containerActiveStyle : containerInactiveStyle]}
    >
      <View
        style={[{
          borderWidth: BORDER_WIDTH,
          borderColor: isInvalid ? inValidColor : isActive ? activeColor : inActiveColor,
          width: size,
          height: size,
          borderRadius: CONTAINER_RADIUS,
          ...styles.ball,
          ...borderStyle,
        }, isActive ? borderActiveStyle : borderInactiveStyle]}
      >
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: BOX_SIZE,
            height: BOX_SIZE,
            borderRadius: BOX_RADIUS,
            backgroundColor: isActive ? activeColor : 'transparent',
            ...ballStyle,
            ...(isActive ? ballActiveStyle : ballInactiveStyle),
          }}
        >
          {text && (
            <Text
              style={[styles.text,{
                color: color.dark,
                ...textStyle,
              }, isActive ? textActiveStyle : textInactiveStyle]}
            >
              {text}
            </Text>
          )}
        </View>
      </View>
      {label && (
        // eslint-disable-next-line react-native/no-inline-styles
        <Text style={[{ 
          fontSize: 15,
          color: color.dark,
          ...labelStyle
        }, isActive ? labelActiveStyle : labelInactiveStyle]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}  

const styles = StyleSheet.create({
  text:{
    fontSize: 10,
    fontWeight: '800'
  },
  ball:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,
  }
})