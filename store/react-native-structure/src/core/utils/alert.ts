import { Alert } from "react-native";
import storage from "../storage/storage";

interface IShowNativeAlertParams {
    title:string;
    body:string;
    onOk?: ()=> void
}


export function showNativeAlert({title, body, onOk}:IShowNativeAlertParams) {
  const lan:any = storage.getItem('language') || "bn" 
  Alert.alert(title, body, [{
    text: lan === "bn" ? "না" : "No",
    onPress: () => {},
    style: "cancel",
  },
  {
    text: lan === "bn" ? "হ্যাঁ" : "Yes",
    onPress: () => {
      onOk?.()
    },
  },
  ],
  { cancelable: false }
  );
  return true;
};