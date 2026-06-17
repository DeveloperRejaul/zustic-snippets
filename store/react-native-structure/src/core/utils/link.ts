import { Linking } from "react-native";
import { speakOff } from "./speak";

export async function open (link: string) {
  try {
    speakOff();
    await Linking.openURL(link)
  } catch (error) {
    console.log(error);
  }
}