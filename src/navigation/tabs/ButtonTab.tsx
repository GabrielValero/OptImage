import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text } from "react-native";
import GalleryStackNavigator from "../stacks/GalleryStack";
import FolderStackNavigator from "../stacks/FolderStack";
import SettingStackNavigator from "../stacks/SettingStack";
import { BottomTabParamList } from "../../types/navigationTypes";
import colors from "../../config/colors";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function ButtonTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.mainColor,
        headerShown: false,
      }}>
      <BottomTab.Screen name="folderTab" component={FolderStackNavigator} />
      <BottomTab.Screen name="galleryTab" component={GalleryStackNavigator} />
      <BottomTab.Screen name="settingTab" component={SettingStackNavigator} />
    </BottomTab.Navigator>
  );
}
