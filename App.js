import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

class App extends React.Component {
  state = {
    url: '',
  };

  updateUrl = url => {
    this.setState({url});
  };

  render() {
    const {url} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.app}>
            <Text style={styles.headerText}>React Native Image Downloader</Text>
            <View style={styles.textInputWrapper}>
              <TextInput
                placeholder="Enter image url here"
                style={styles.textInput}
                value={url}
                onChangeText={text => this.updateUrl(text)}
              />
            </View>
            <Image source={{uri: url}} style={styles.imagePreview} />
            <TouchableOpacity style={styles.downloadButton}>
              <Text>Download Image</Text>
            </TouchableOpacity>
          </View>
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
  app: {
    backgroundColor: '#11131B',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerText: {
    marginTop: 50,
    fontSize: 26,
    color: 'white',
  },
  textInputWrapper: {
    marginTop: 30,
    alignSelf: 'stretch',
    padding: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 3,
  },
  imagePreview: {
    height: 300,
    width: 300,
    backgroundColor: 'purple',
    marginTop: 30,
  },
  downloadButton: {
    backgroundColor: 'white',
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 3,
  },
});
