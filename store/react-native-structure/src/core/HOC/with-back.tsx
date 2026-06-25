import React, { type ComponentType, useEffect } from "react";
import { BackHandler } from "react-native";
import { useTranslation } from "react-i18next";
import { bottomSheet } from "../components/BottomSheet";
import { router } from "../navigation/router";
import { showNativeAlert } from "../utils/alert";
import { RootStackParamsList } from "../navigation/types";

export interface WithBackOptions {
  screens: (keyof RootStackParamsList)[]
}

export default function withBack<P extends object>(
  WrappedComponent: ComponentType<P>,
  options?: WithBackOptions
) {
  const {screens} = options ||{} 

  const WithBackHandler = (props: P) => {
    const {i18n} = useTranslation()

    useEffect(() => {
      const backAction = () => {
        const screen = router.current();
        if(screen && screens?.includes(screen as any)) {
          if(bottomSheet.isOpen) {
            bottomSheet.hide()
            return true
          }
          showNativeAlert({
            title: i18n.language === 'en' ? "Are you sure?" : "আপনি কি নিশ্চিত?",
            body: i18n.language === 'en' ? `Do you want to ${router.canBack() ? "go back" : "exit this app"}?` : `আপনি কি ${router.canBack() ? "ফিরে যেতে চান" : "অ্যাপটি বন্ধ করতে চান"}?`,
            onOk() {
              if(router.canBack()) {
                router.withPop()
              }else {
                BackHandler.exitApp();
              }
            },
          })
        }else{
          if(router.canBack()) {
            router.withPop()
          }else {
            if(bottomSheet.isOpen) {
              bottomSheet.hide()
              return true
            }
            BackHandler.exitApp()
          }
        }
        return true
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithBackHandler;
}
