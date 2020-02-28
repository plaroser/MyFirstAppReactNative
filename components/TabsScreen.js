import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './Tabs/HomeStackScreen';
import BasicComponentsStackScreen from './Tabs/BasicComponentsStackScreen';

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="BasicComponents" component={BasicComponentsStackScreen} />
        </Tab.Navigator>

    );
}