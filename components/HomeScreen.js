import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to Buttons"
                onPress={() => navigation.navigate('Buttons')}
            />
            <Button
                title="Go to Tabs"
                onPress={() => navigation.navigate('Tabs')}
            />
        </View>
    );
}
export default HomeScreen;