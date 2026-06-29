import { Linking } from "react-native";

export async function open (link: string) {
  try {
    await Linking.openURL(link)
  } catch (error) {
    console.log(error);
  }
}