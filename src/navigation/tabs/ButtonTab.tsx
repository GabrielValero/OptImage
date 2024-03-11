import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Text } from 'react-native'
import GalleryStack from '../stacks/GalleryStack'
import FolderStack from '../stacks/FolderStack'
import SettingStack from '../stacks/SettingStack'

const Tab = createBottomTabNavigator();

export default function ButtonTab() {
  return (
    <Tab.Navigator initialRouteName="Feed"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
        }}
    >
      <Tab.Screen name="GalleryStack" component={GalleryStack} />
      <Tab.Screen name="FolderStack" component={FolderStack} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
    </Tab.Navigator>
  );
}

