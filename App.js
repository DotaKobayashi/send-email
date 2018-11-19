import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default class App extends Component {
  _handleButtonPress = () => {
    this.sendEmail()
  };

  sendEmail(){
    return fetch('https://api.myjson.com/bins/w8jte')
      .then((response) => {
        if (response.ok) Alert.alert('送信しました')
        else this.errorMessage()
      })
      .catch((error) => this.errorMessage());
  }

  errorMessage() {
    Alert.alert('送信に失敗しました')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='遅延のメールを送信する'
          buttonStyle={styles.buttonStyle}
          onPress={this._handleButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
});
