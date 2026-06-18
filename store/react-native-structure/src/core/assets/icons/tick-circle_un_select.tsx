import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconType } from "./types";
const CircleUnSelectIcon = (props:IconType) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke="#C2C7D0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CircleUnSelectIcon;
