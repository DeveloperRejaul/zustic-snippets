import messaging from "@react-native-firebase/messaging";

export async function getFcmToken () {
  return messaging().getToken()
}