import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../../components/pages/SettingScreen'
import { SettingStackParamList } from '../../types/navigationTypes';

const SettingStack = createStackNavigator<SettingStackParamList>();

export default function SettingStackNavigator() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
      {/* Agrega aquí otros screens para el SettingStack */}
    </SettingStack.Navigator>
  );
}