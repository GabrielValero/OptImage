import { NavigationContainer } from '@react-navigation/native';
import react from 'react'
import ButtonTab from './tabs/ButtonTab'

export default function  MainNav() {
    return (
      <NavigationContainer>
        <ButtonTab/>
      </NavigationContainer>
    );
  }