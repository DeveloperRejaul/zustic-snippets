import { Platform } from 'react-native';
import {
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';


export async function requestCameraPermission() {
  const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const result = await request(permission);
  return result === RESULTS.GRANTED;
}
