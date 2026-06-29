import { Alert } from "react-native";
import { i18n } from "../i18n/i18";

interface IShowNativeAlertParams {
    title:string;
    body:string;
    onOk?: ()=> void
}


export function showNativeAlert({title, body, onOk}:IShowNativeAlertParams) {
  Alert.alert(title, body, [{
    text: i18n.t('no'),
    onPress: () => {},
    style: "cancel",
  },
  {
    text: i18n.t('yes'),
    onPress: () => {
      onOk?.()
    },
  },
  ],
  { cancelable: false }
  );
  return true;
};