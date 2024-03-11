import { createStackNavigator } from '@react-navigation/stack';
import FolderScreen from '../../components/pages/FolderScreen'
const Stack = createStackNavigator();

export default function GalleryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FolderScreen" component={FolderScreen} />
    </Stack.Navigator>
  );
}