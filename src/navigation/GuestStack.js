import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/LoginPage';
import SignupPage from '../screens/SignupPage';
import HomePage from '../screens/HomePage';
import NewsDetailPage from '../screens/NewsDetailPage';

const Stack = createNativeStackNavigator();

const GuestStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomePage" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignupPage" component={SignupPage} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="NewsDetailPage" component={NewsDetailPage} />
        </Stack.Navigator>
    );
};

export default GuestStack;