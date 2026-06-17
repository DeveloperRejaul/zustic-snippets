import Tts from "react-native-tts"
import { popup } from "../components/Modals/ModalsContainer";
import VoiceOverModal from "../components/Modals/VoiceOverModal";
import storage from "../storage/storage"

export function speak(text:string) {
  const voice = storage.getItem('voice')
  if(voice === "on") {
    Tts.speak(text)
  }
}

export function speakWithDialog(text:string, isSpeaking: boolean) {
  let vs = storage.getItem('voice');
  if(vs === 'off' || !vs) {
    popup.show({
      render: <VoiceOverModal/>
    })
  }
  vs = storage.getItem('voice');
      
  if(vs === "on"  && !isSpeaking) {
    Tts.speak(text)
    return true
  }
  speakOff()

  return false
}

export function speakOff() {
  Tts.stop()
}
