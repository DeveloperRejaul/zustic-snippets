import notifee from '@notifee/react-native'
import { type ShowNotificationParams } from "types";

export  const channelId = "miscellaneous-channel"
export function showNotification ({title, body}:ShowNotificationParams) {
  notifee.displayNotification({
    title,
    body,
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
}
