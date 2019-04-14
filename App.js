import React, { Component } from "react";
import { TextInput, Text, View, Button } from "react-native";

export default class App extends Component {
  state = {
    name: [],
    showName: false,
    text: ""
  };

  buttonClickListner = e => {
    const { name, text } = this.state;
    name.push(text.toString());
    this.setState({ text: "" });
  };

  render() {
    const { name, text } = this.state;
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 150 }}
          placeholder="Enter a Name...."
          value={text}
          onChangeText={val => {
            this.setState({
              text: val
            });
          }}
        />
        <Button
          onPress={this.buttonClickListner}
          title="Submit"
          color="#008000"
        />

        {name.length > 0 ? name.map(item => <Text>{item}</Text>) : null}
      </View>
    );
  }
}
