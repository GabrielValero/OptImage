import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Text } from "react-native";
import GalleryStackNavigator from "../stacks/GalleryStack";
import FolderStackNavigator from "../stacks/FolderStack";
import SettingStackNavigator from "../stacks/SettingStack";
import { BottomTabParamList } from "../../types/navigationTypes";

import MyTabBar from "./TabButtons";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function ButtonTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTab.Screen
        name="galleryTab"
        component={GalleryStackNavigator}
        options={{
          title: "Imágenes",
        }}
      />
      <BottomTab.Screen
        name="folderTab"
        component={FolderStackNavigator}
        options={{
          title: "Carpetas",
        }}
      />
      <BottomTab.Screen
        name="settingTab"
        component={SettingStackNavigator}
        options={{
          title: "Ajustes",
        }}
      />
    </BottomTab.Navigator>
  );
}
