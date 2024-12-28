import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import { useSelector } from 'react-redux';
import GuestStack from './GuestStack';
import CustomUserBottomBar from '../components/CustomUserBottomBar';
import CustomGuestBottomBar from '../components/CustomGuestBottomBar';

const RootNavigation = () => {

    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <NavigationContainer>
            {!isAuth ? <><GuestStack /><CustomGuestBottomBar/></> : <><UserStack /><CustomUserBottomBar /></>}
        </NavigationContainer>

    )
}

export default RootNavigation