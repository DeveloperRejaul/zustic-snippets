import { type ViewStyle } from "react-native";

export interface IconType {
    size?: number;
    color?: string;
    style?: ViewStyle,
    width?:number
    height?:number
    animatedProps?:any;
    strokeWidth?:number;
    fill?:string;
}