import {NativeEventEmitter} from 'react-native'
import { fetch as ft } from '@react-native-community/netinfo';
import i18nNext from 'i18next';
import I18 from 'i18next'
import HttpBackend, { type HttpBackendOptions } from 'i18next-http-backend';
import {initReactI18next, useTranslation} from 'react-i18next';
import TTS from 'react-native-tts'
import storage from '../storage/storage'
import bn from './lang/bn.json';
import en from './lang/en.json';
import { type TranslationKey } from './types';
import { BASE_URL } from '../constance/secret';

export const i18Event = new NativeEventEmitter()

const LAN:Record<'en'|'bn', any> = {
  en,
  bn
}

let len:"en"|'bn' = 'bn';
i18nNext
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: 'bn',
    debug: __DEV__,
    backend: {
      loadPath: `${BASE_URL}/configuration/configuration-data`,
      request: async (_options, url, _payload, callback) => {
        try {
          // checking net ok
          const status = await ft()
          if(!status.isConnected){
            callback(null, {
              status: 200,
              data:{...LAN[len]},
            });
            i18Event.emit('loadFailed', 'internet not alliable successfully')
            return 
          }
          
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              language:len,
            },
          });
          if(response.ok) {
            const data:any = await response.json();
            
            callback(null, {
              status: 200,
              data:{...data.data.content_text, ...LAN[len]},
            });
            i18Event.emit('loaded', 'data load successfully')
            return
          }
          callback(null, {
            status: 200,
            data:{...LAN[len]},
          });
          i18Event.emit('loadFailed', 'data not load successfully')
        } catch {
          callback(null, {
            status:200,
            data:{...LAN[len]},
          });
          i18Event.emit('loadFailed', 'data not load successfully')
        }
      },
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
    ns: ['common'],
    defaultNS: 'common',
  });

export async function updateLanguage(lanName: "en" | 'bn') {
  try {
    len=lanName;
    await I18.reloadResources(lanName)
    await I18.changeLanguage(lanName)
    storage.setItem('language', lanName)
    if(lanName === 'bn'){
      TTS.setDefaultLanguage('bn-BD')
    }
    if(lanName === 'en'){
      TTS.setDefaultLanguage('en-US')
    }
  } catch (error) {
    console.log(error);
  }
}

export const useTypeTranslation = () => {
  const {t:tr, ...extra} = useTranslation();
  function t(key:TranslationKey) {
    return tr(key)
  }
  return {
    t,
    ...extra
  }
};

export default i18nNext;
