import React from 'react';
import Cameraroll from '@react-native-community/cameraroll';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';

class App extends React.Component {
  handleTakePhoto() {
    console.log('take photo');
  }
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TouchableOpacity onPress={this.handleTakePhoto}>
            <Text>Take photo</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}

export default App;

const styles = StyleSheet.create({});
