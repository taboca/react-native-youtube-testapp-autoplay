# A very basic react-native-youtube demo for testing purposes

The main app is quite simple

```
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import YouTube from 'react-native-youtube';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <YouTube
          apiKey="AIzaSyBeS7x_thM-ZgrlAx2FvlALHTDWqZKIvD4"
          videoId="HaftLnXnnlw"
          play={false}
          controls={1}
          fullscreen={false}
          onChangeState={e => this.setState({ status: e.state })}
          onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
```

## Installing

* npm install
* npm start&
* react-native run-android  

### Check gradle compatibility between this app's build.gradle and the react-native-youtube build.gradle 

For compiling, you may want to check the compatibility between

*  ./android/build.gradle
* ./node_modules/react-native-youtube/android/build.gradle

In my case, I had to replace the above, react-native-youtube/android/build.gradle with the following

```
buildscript {
    repositories {
        jcenter()
    }

   dependencies {
        classpath 'com.android.tools.build:gradle:2.3.3'
    }
}

apply plugin: 'com.android.library'

android {
    compileSdkVersion 26
    buildToolsVersion "26.0.3"

    defaultConfig {
        minSdkVersion 16
        targetSdkVersion 26
        versionCode 1
        versionName "1.0"
    }
    lintOptions {
        abortOnError false
    }
}

repositories {
    mavenCentral()
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.facebook.react:react-native:+'
}

```
