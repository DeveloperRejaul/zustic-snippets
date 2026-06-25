import ImageCropPicker from "react-native-image-crop-picker";
import {launchImageLibrary} from 'react-native-image-picker';
import { requestCameraPermission } from "./permission";


export async function documentPacker(key:"camera" | 'gallery') { 
  try {
    if(key === 'camera') {
      const granted = await requestCameraPermission();
      if (!granted) {
        console.log("Camera permission denied");
        return null;
      }

      const pickerResult = await ImageCropPicker.openCamera({
        cropping: true,
        mediaType: "photo",
      });
      return pickerResult;
    }

    if(key === 'gallery') {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        presentationStyle:"formSheet",
      })

      const pickerResult = ImageCropPicker.openCropper({
        path: result?.assets?.[0]?.uri || "",
        cropping: true,
        mediaType: "photo"
      })
      return pickerResult;
    }
  } catch (error) {
    console.log(error);
  }
}