import { fetch as ft } from '@react-native-community/netinfo';
import i18nNext from '../i18n/i18';
import storage from '../storage/storage';
import { showToast } from '../utils/toast';

export type Error = {
  status: number;
  message:string
}
export type Success<T = any> = {
 data: T
}

export type Options = {
  apiType?: 'REST' | 'GRAPHQL',
  timeout?:number;
  baseUrl:string;
  engine?:"ZUSTIC" | "RTK"
}

class Query {
  getHeader (args?:any) {
    const headers = args?.headers ? new Headers(args?.headers) : args?.formData ? new Headers(args?.headers): new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const token = storage.getItem('user_token')  

    headers.set('x-access-token', token || "");
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('language', storage.getItem('language') || "bn");
    headers.set('latitude', storage.getItem('latitude') || '');
    headers.set('longitude', storage.getItem('longitude') || '');
    headers.set('division-id', storage.getItem('division_id') || '');
    headers.set('district-id', storage.getItem('district_id') || '');
    headers.set('upazila-id', storage.getItem('upazila_id') || '' );

    headers.set('d-district-id',  storage.getItem('d-district_id') || "" );
    headers.set('d-upazila-id',  storage.getItem('d-upazila_id') || "" );
    //     version_name: versionName,
    //     version_code: versionCode,
    return headers;
  }

  private success<T = any>(data:Success<T>){
    return {data};
  }

  private error(err:Error) {
    return {
      error:{
        status: err?.status || 500,
        data: {
          message: err?.message || 'Something went wrong',
        },
      },
    };
  }

  baseQuery = (params:Options)=> async (args:any  /* , api, extraOptions  */)=> {
    /* const { signal, dispatch, getState } = api; */
    const {
      apiType = 'REST',
      timeout = 60000, //60-second timeout
      baseUrl,
      engine = "RTK"
    } = params;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);


    // Construct URL properly
    const url = typeof args === 'string' ? `${baseUrl}${args}` : `${baseUrl}${args.url}`;

    try {
      let headers:any  = this.getHeader(args);

      if(engine === "ZUSTIC") {
        headers = Object.fromEntries(headers.entries()) 
      }

      // checking net ok
      const status = await ft()
      if(!status.isConnected){
        clearTimeout(timeoutId);
        showToast(i18nNext.t('internet_status'))
        return this.error({message:"net work not Available", status: 404} as Error);
      }
      
      // fetch api call
      const response = await fetch(url, {
        method: args?.method || 'GET',
        headers:headers,
        body:args?.formData ? args?.formData : args?.body ? JSON.stringify(args.body): undefined,
        signal: controller.signal,
        credentials:'include',
      });
      
      clearTimeout(timeoutId);
      

      if (!response.ok) {
        throw (await response.json() || "Something went wrong")
      }
      
      const res = await response.json();
      return this.success(res as any);

    } catch (error) {
      console.log(error);
    
      clearTimeout(timeoutId);
      return this.error(error as Error);
    }
  };
}

export default new Query();