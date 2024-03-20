import { createStackNavigator } from '@react-navigation/stack';
import FolderScreen from '../../components/pages/FolderScreen'
import { FolderStackParamList } from '../../types/navigationTypes';

const FolderStack = createStackNavigator<FolderStackParamList>();

export default function FolderStackNavigator() {
  return (
    <FolderStack.Navigator>
      <FolderStack.Screen name="FolderScreen" component={FolderScreen} />
    </FolderStack.Navigator>
  );
}