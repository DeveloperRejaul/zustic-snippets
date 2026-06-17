import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconType } from "./types";
const CheckBoxCheckIcon = (props:IconType) => (
  <Svg
    width={props.size || 10}
    height={props.size || 8}
    viewBox="0 0 10 8"
    fill="none"
    {...props}
  >
    <Path
      d="M8.83398 0.833252L3.33398 6.33325L0.833984 3.83325"
      stroke={props.color ||"#21825C"}
      strokeWidth={1.6666}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckBoxCheckIcon;
