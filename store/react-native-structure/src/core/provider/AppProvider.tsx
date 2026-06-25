import React, { createContext, use, useEffect } from 'react'
import { Platform} from 'react-native'
import notifee from '@notifee/react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import messaging from '@react-native-firebase/messaging';
import '@src/core/i18n/i18'
import { type FCMNotificationPayload } from 'types';
import { updateLanguage } from '@src/core/i18n/i18';
import { useCartStore } from '@src/features/agro-shop/store/cart-store';
import { channelId, showNotification } from '../notification/notifee';
import storage from '../storage/storage';
interface IAppContext {
  isInternetConnected: boolean | null 
  init(): Promise<void>
}

const AppContext = createContext({} as IAppContext )

export default function AppProvider({children}: Readonly<{children: React.ReactNode}>) {
  const {isConnected: isInternetConnected = true} = useNetInfo()
  const {init: loadCardData} = useCartStore()
  

  useEffect(()=>{
    //@ts-ignore
    const onMessageListener = messaging().onMessage(onMessageReceived);
    //@ts-ignore
    // messaging().setBackgroundMessageHandler(onMessageReceived);

    messaging().subscribeToTopic('all-users');
    messaging().getInitialNotification().then((remoteMessage) => {
      if (remoteMessage) {
        // console.log(remoteMessage);
        // navigate("early_warning");
      }
    });

    // load card data 
    loadCardData()

    // getFcmToken().then(token => console.log(token))
    

    // TODO: maybe remove this code in feature
    const onTokenRefreshListener = messaging().onTokenRefresh(token => {
      console.log('FCM Token refreshed:', token);
    });

    // handle language 
    const initialLan = storage.getItem('language')

    if(initialLan){
      updateLanguage(initialLan as ("en" | 'bn'))
    }else{
      updateLanguage('bn')
    }
    

    return () => {
      onMessageListener();
      onTokenRefreshListener();
    }
  },[])

  async function init() {
    try {
      if(Platform.OS === 'android'){
        await notifee.requestPermission()
        await notifee.createChannel({
          id: channelId,
          name: 'Miscellaneous Notifications',
          sound:'hollow',
          vibration:true
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onMessageReceived(message:FCMNotificationPayload) {
    showNotification({
      title: message.notification?.title || "",
      body: "",
    });
  }

  return (
    <AppContext.Provider value={{isInternetConnected, init }}>
      {children}
    </AppContext.Provider>
  )
}


export const useAppContext = ()=> use(AppContext)