import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../../components/pages/GalleryScreen'
import { GalleryStackParamList } from '../../types/navigationTypes';

const GalleryStack = createStackNavigator<GalleryStackParamList>();

export default function GalleryStackNavigator() {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen name="Gallery" component={GalleryScreen} />
    </GalleryStack.Navigator>
  );
}