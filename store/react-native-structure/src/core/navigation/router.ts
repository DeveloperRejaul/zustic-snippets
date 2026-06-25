import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { type RootStackParamsList } from './types';
import { bottomSheet } from '../components/BottomSheet';
import { BACK_PERMISSION_SCREENS } from '../constance/back-permission-screens';
import storage from '../storage/storage';
import { showNativeAlert } from '../utils/alert';
import { speakOff } from '../utils/speak';

export type RouteType = keyof RootStackParamsList

export const navigationRef = createNavigationContainerRef();

export class router {
  static push<RouteName extends keyof RootStackParamsList>(name: RouteName, params?: RootStackParamsList[RouteName]) {
    if (navigationRef.isReady()) {
      speakOff()
      navigationRef.dispatch(StackActions.push(name, params));
    }
  }

  static reset<RouteName extends keyof RootStackParamsList>(name: RouteName, params?: RootStackParamsList[RouteName]){
    if (navigationRef.isReady()) {
      navigationRef.reset({index: 0, routes: [{name, params}]});
    }
  }

  static pop() {
    if(navigationRef.isReady() && navigationRef.canGoBack() && BACK_PERMISSION_SCREENS.includes(this.current() as any)){
      const lan = storage.getItem('language') || 'bn'
      showNativeAlert({
        title: lan === 'en' ? "Are you sure?" : "আপনি কি নিশ্চিত?",
        body: lan === 'en' ? `Do you want to go back?` : `আপনি কি ফিরে যেতে চান ?`,
        onOk() {
          router.withPop()        
        },
      })
      return
    }
    return this.withPop()
  }

  static withPop () {
    speakOff()
    if(bottomSheet.isOpen){
      bottomSheet.hide()
      return
    }
    if(navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.dispatch(StackActions.pop());
    }
  }

  static navigate<RouteName extends keyof RootStackParamsList>(name: RouteName, params?: RootStackParamsList[RouteName]) {
    if (navigationRef.isReady()) {
      // @ts-ignore
      navigationRef.navigate(name, params);
    }
  }

  static back() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  }

  static canBack () {
    return navigationRef.canGoBack()
  }

  static replace<RouteName extends keyof RootStackParamsList>(name: RouteName, params?: RootStackParamsList[RouteName]) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name, params));
    }
  }

  static current(){
    if (!navigationRef.isReady()) return undefined;
    const state = navigationRef.getState();
    return state.routes[state.routes.length-1]?.name
  }
}
  