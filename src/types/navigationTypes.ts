import { NavigatorScreenParams } from '@react-navigation/native';

export type FolderStackParamList = {
  FolderScreen: undefined;
};

export type GalleryStackParamList = {
  Gallery: undefined;
  // Agrega aquí otros nombres de pantalla y sus parámetros
};

export type SettingStackParamList = {
  Setting: undefined;
  // Agrega aquí otros nombres de pantalla y sus parámetros
};

export type BottomTabParamList = {
  folderTab: NavigatorScreenParams<FolderStackParamList>;
  galleryTab: NavigatorScreenParams<GalleryStackParamList>;
  settingTab: NavigatorScreenParams<SettingStackParamList>;
};
