import 'react-native-gesture-handler';
import MainNav from './src/navigation/MainNav'
import useMediaLibrary from './src/hooks/useMediaLibrary';
import { useEffect } from 'react';


export default function App() {
    const {isPermissionEnabled} = useMediaLibrary()

    useEffect(()=>{
        isPermissionEnabled()
    },[])
    return (
        <MainNav/>
    );
}
