import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@src/features/home';


export default createStaticNavigation(createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
  screenOptions:{
    headerShown:false,
  }
}));
