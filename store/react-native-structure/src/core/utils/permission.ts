import { Platform } from 'react-native';
import {
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

export async function requestGalleryPermission() {
  if (Platform.OS === 'ios') {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    return result === RESULTS.GRANTED;
  }

  // ANDROID
  if (Number(Platform.Version) >= 33) {
    const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    return result === RESULTS.GRANTED;
  } else {
    const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    return result === RESULTS.GRANTED;
  }
}

export async function requestCameraPermission() {
  const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const result = await request(permission);
  return result === RESULTS.GRANTED;
}

export async function requestStoragePermission() {
  try {
    let permission;

    if (Platform.OS === 'android') {
      // Android 13+ uses READ/WRITE_MEDIA permissions
      permission =  Platform.Version >= 33 ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
    } else {
      // iOS uses Photo Library permission
      permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    }

    // Check permission
    const result = await request(permission);

    if (
      result === RESULTS.GRANTED ||
      result === RESULTS.LIMITED // iOS limited access accepted
    ) {
      return true;
    }

    return false;
  } catch (error) {
    console.warn('Permission error:', error);
    return false;
  }
}

export async function requestLocationPermission () {
  const permission =  Platform.OS === "ios" ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  const result = await request(permission);
  return result === RESULTS.GRANTED;
}