  
import React from 'react';
import {Text, type ViewStyle, StyleSheet, type TextStyle, TouchableOpacity ,ActivityIndicator, type TouchableOpacityProps} from 'react-native';
import { colors } from '../constance/colors';
import { typography } from '../constance/typography';

export interface IButton extends TouchableOpacityProps {
    text?:string
    leftIcon?: React.JSX.Element
    rightIcon?: React.JSX.Element
    containerStyle?: ViewStyle;
    textStyle?: TextStyle
    variant?: 'solid' | 'outline' | 'link'
    action?:'primary' | 'secondary' | 'positive' | 'negative'
    isLoading?:boolean;
}

export default function Button(props : IButton) {
  const {
    text = 'Click Me',
    containerStyle,
    leftIcon,
    rightIcon,
    textStyle,
    variant = 'solid',
    action = 'primary',
    isLoading,
    disabled,
  } = props;

  const color = {
    primary: '#239066',
    secondary: '#8E24AA',
    positive: '#43A047',
    negative: '#D32F2F',
  };

  const style = {
    solid: {
      backgroundColor: color[action],
    },
    outline: {
      borderWidth: 1,
      borderColor: color[action],
    },
    link: {},
  };

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      style={[styles.container, { opacity: (disabled || isLoading) ? 0.5 : 1 }, style[variant], containerStyle]}
      {...props}
    >
      {leftIcon}
      {/* {isLoading ?  */}
      <ActivityIndicator
        style={{opacity: isLoading ? 1: 0, position:"absolute", left:0, right:0, top:0, bottom:0}}
        size='small'
        color={colors.white}
      />
      <Text 
        style={[
          {opacity:isLoading ? 0: 1 },
          typography.text_md_medium, 
          textStyle,
          variant === 'link' && { textDecorationLine: 'underline' }
        ]}>
        {text}
      </Text>
      {/* } */}
      {rightIcon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
  },
});
