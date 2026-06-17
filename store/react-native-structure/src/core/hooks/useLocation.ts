/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Geolocation, { type GeolocationResponse } from "@react-native-community/geolocation";
import { useTranslation } from "react-i18next";
import { useLazyGetAddressWithLocationQuery, useLazyGetHomeFeatureListQuery, useLazyGetWeatherQuery } from "@src/features/home/api";
import { LocationStatus } from "../constance/location-status";
import storage from "../storage/storage";
import { wait } from "../utils/promise";

export default () => {
  const [message, setMessage] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [position, setPosition] = useState({} as GeolocationResponse);
  const [getWeather, {isLoading, isFetching, data, isError, error}] = useLazyGetWeatherQuery()
  const [geAddress] = useLazyGetAddressWithLocationQuery()
  const { t, i18n } = useTranslation();
  const [getFeature] = useLazyGetHomeFeatureListQuery()
  
  useEffect(() => {
    search();
  }, [i18n.language]);

  const search = () => {
    setSearching(true);

    Geolocation.getCurrentPosition(
      async (suc) => {
        storage.setItem('latitude', suc.coords.latitude.toString())
        storage.setItem('longitude', suc.coords.longitude.toString())
        await wait()
        setPosition(suc);
        setSearching(false);
        setMessage(null);
        getWeather()
        geAddress()
        getFeature()
      },
      (err) => {
        let msg = "";
        switch (err.code) {
        case LocationStatus.ACTIVITY_NULL:
          msg = t("location.activity_null");
          break;
        case LocationStatus.PERMISSION_DENIED:
          msg = t("location.permission_denied");
          break;
        case LocationStatus.TIMEOUT:
          msg = t("location.timeout");
          break;
        case LocationStatus.POSITION_UNAVAILABLE:
          msg = t("location.position_unavailable");
          break;
        default:
          msg = t("location.unknown_error");
          break;
        }

        setMessage(msg);
        setSearching(false);
      }
    ),
    {
      enableHighAccuracy: true,
      timeout: 15000,
      interval: 1000,
    }
  }

  return {
    search,
    message: (searching || isLoading || isFetching) ? t("location.searching") : isError ? error?.data?.message : message,
    searching,
    position,
    isLoading: searching || isLoading || isFetching,
    weather: data,
  };
};
