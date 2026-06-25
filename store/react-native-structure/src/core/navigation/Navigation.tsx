import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './router';
import { screens } from './screens';
import { type RootStackParamsList } from './types';

const Stack = createNativeStackNavigator<RootStackParamsList>();


export default function Navigation () {
  return (
    <NavigationContainer 
      linking={{
        prefixes:['medinatechdrchashi://'],
        config:{
          screens:{
            PaymentResult: 'payment-result'
          }
        },
      }}
      ref={navigationRef}
    >
      <Stack.Navigator
        screenOptions={{ 
          headerShown: false, 
          gestureEnabled: true, 
          animation:"slide_from_right"
        }}
      >
        {/* @ts-ignore */}
        {screens.map(ele => <Stack.Screen key={ele.name} name={ele.name} component={ele.component} />)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
