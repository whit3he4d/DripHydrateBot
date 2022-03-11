import React from 'react';
import {connect} from 'react-redux';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import background from './background.jpg';

// import Heartbeat from './Heartbeat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>

      </ImageBackground>
    </View>
  );
};

const mapStateToProps = store => ({
  heartBeat: store.App.heartBeat,
});

export default connect(mapStateToProps)(App);
