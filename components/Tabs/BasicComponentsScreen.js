import React, { Component } from 'react';
import { Picker, Alert } from 'react-native';


export class BasicComponentsScreen extends Component {
    componentDidMount() {
        this.setState({ language: "Java" })
    }
    changePicker = (itemValue, itemIndex) => {
        this.setState({ language: itemValue })
        Alert.alert("Seleccionado: " + itemValue)
    }
    render() {
        if (this.state)
            return (
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => {
                        this.changePicker(itemValue, itemIndex)
                    }}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>);
        else return null;
    }

}
