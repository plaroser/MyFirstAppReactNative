import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './Tabs/HomeStackScreen';
import SettingsStackScreen from './Tabs/SettingsStackScreen';

const Tab = createBottomTabNavigator();

export default function TabsScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Settings" component={SettingsStackScreen} />
        </Tab.Navigator>

    );
}