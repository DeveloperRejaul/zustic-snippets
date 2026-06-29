import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { type IconType } from "./types";
const SearchIcon = (props:IconType) => (
  <Svg
    width={props.size || 16}
    height={props.size || 16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <Path
      d="M7.66634 14.0002C11.1641 14.0002 13.9997 11.1646 13.9997 7.66683C13.9997 4.16903 11.1641 1.3335 7.66634 1.3335C4.16854 1.3335 1.33301 4.16903 1.33301 7.66683C1.33301 11.1646 4.16854 14.0002 7.66634 14.0002Z"
      stroke="#248F65"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.4}
      d="M14.6663 14.6668L13.333 13.3335"
      stroke="#248F65"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SearchIcon;