import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import react from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import SettingIcon from "../../components/icons/SettingIcon";
import GalleryIcon from "../../components/icons/GalleryIcon";
import FolderIcon from "../../components/icons/FolderIcon";
import {colors, dimensions} from "../../config/constants";

export default function MyTabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  return (
    <View style={styles.tab}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title

        const isFocused = state.index === index;
        const color = isFocused ? colors.mainColor : "gray"
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        const size = dimensions.navigationIcon
        const icons = [
            <GalleryIcon width={size} height={size} color={color} />,
            <FolderIcon width={size} height={size} color={color} />,
            <SettingIcon width={size} height={size} color={color} />
        ]
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
            key={index}
          >
            {icons[index]}
            <Text style={[styles.label, {color: color}]}>
              {`${label}`}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    tab:{
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        fontSize: 10,
    }
})