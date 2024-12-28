import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import NewsDetailPage from '../screens/NewsDetailPage';
import ProfilePage from '../screens/ProfilePage';

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="NewsDetailPage" component={NewsDetailPage} />
            <Stack.Screen name="ProfilePage" component={ProfilePage} />
        </Stack.Navigator>
    );
};

export default UserStack;