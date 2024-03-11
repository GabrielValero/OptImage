import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../../components/pages/GalleryScreen'
const Stack = createStackNavigator();

export default function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
    </Stack.Navigator>
  );
}