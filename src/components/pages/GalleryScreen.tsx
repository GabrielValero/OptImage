import react from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useMediaLibrary from '../../hooks/useMediaLibrary';

export default function GalleryScreen(){
    const {getImagesSortedByDate} = useMediaLibrary()
    return (
        <View style={styles.container}>
            
        </View>
    );
}
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});
