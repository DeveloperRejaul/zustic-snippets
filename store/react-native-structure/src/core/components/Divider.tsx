
import React from "react";
import { View, type ViewProps } from "react-native";

export interface IDivider extends ViewProps {
    className?: string;
    orientation?: "horizontal" | "vertical"
    backgroundColor?: string;
    m?: number,
    h?:number
}

export default function Divider(props: IDivider) {
  const {
    orientation = "vertical",
    backgroundColor = "#000",
    m,
    h: height
  } = props;

  const vm = orientation === "vertical" ? m : 0;
  const hm = orientation === "horizontal" ? m : 0
  const h = orientation === "horizontal" ? "100%" : height ||1;
  const w = orientation === "vertical" ? null :height || 1;

  return (
    <View
      {...props}
      style={[{
        height: h,
        width: w,
        backgroundColor,
        marginVertical: vm,
        marginHorizontal: hm,
      }, props.style]}
    />
  );
}
  
  