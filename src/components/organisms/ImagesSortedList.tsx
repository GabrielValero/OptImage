import react, {useState} from 'react';
import { FlatList, Text, View } from 'react-native';
import useMediaLibrary from '../../hooks/useMediaLibrary';

export default function ImagesSortedList(){

    const [imagesList, setImagesList] = useState([])
    const {getImagesSortedByDate} = useMediaLibrary()

    const getImages = ()=>{
        
    }

    const renderItem = ()=>(
        <View>
            <Text>Fecha</Text>
        </View>
    )

    return(
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
        />
    )
}