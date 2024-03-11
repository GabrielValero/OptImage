import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GalleryScreen(){
    return (
        <View style={styles.container}>
            <Text>Gallery Screen</Text>
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
