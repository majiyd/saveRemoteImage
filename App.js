import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Text>Save Image</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2FF345CC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
