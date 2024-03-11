import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../../components/pages/SettingScreen'
const Stack = createStackNavigator();

export default function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}