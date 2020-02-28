import * as React from 'react';
import DetailsScreen from '../DetailsScreen';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function BasicComponentsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
const SettingsStack = createStackNavigator();

function BasicComponentsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="BasicComponents" component={BasicComponentsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
        </SettingsStack.Navigator>
    );
}

export default BasicComponentsStackScreen;