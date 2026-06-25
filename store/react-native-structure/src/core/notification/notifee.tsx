import notifee from '@notifee/react-native'
interface ShowNotificationParams {
  title:string;
  body:string
}

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
