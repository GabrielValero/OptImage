import { Alert } from "react-native";

export default function useAlertMessage(){
    
    const showAlertMessage = (title:string, message: string)=>{
        Alert.alert(
            "Título de la alerta",
            "Mensaje de la alerta",
            [
               {text: "Cancelar", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
               {text: "OK", onPress: () => console.log("OK Pressed")},
            ],
            { cancelable: false }
           );
    }
    
    return{

    }
}