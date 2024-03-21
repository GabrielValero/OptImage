import react, { useEffect } from 'react'
import {requestPermissionsAsync, getAssetsAsync} from 'expo-media-library';

export default function useMediaLibrary(){

    const isPermissionEnabled = async ()=>{
        const { status } = await requestPermissionsAsync();
        
        return status !== 'granted' ? false : true;
    }

    const getImagesSortedByDate = async () => {
        // Solicitar permisos
        isPermissionEnabled()
      
        try {
          // Obtener las imágenes
          const { assets } = await getAssetsAsync({
            mediaType: 'photo', // Filtrar solo fotos
            sortBy: 'creationTime', // Ordenar por fecha de creación
          });
      
          // Aquí puedes manejar las imágenes ordenadas por fecha
          console.log(assets);
        } catch (error) {
          console.error('Error al obtener las imágenes:', error);
        }
      };
    return {
        getImagesSortedByDate,
    }      
}