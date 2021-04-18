import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import MaterialButtonDark from '../components/MaterialButtonDark';
import MaterialButtonGrey from '../components/MaterialButtonGrey';

function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.welcome}>Welcome</Text>
        </View>
        <View style={styles.rect1}>
          <View style={styles.welcome1Stack}>
            <Text style={styles.welcome1}>
              This Company Software Company.{'\n'}Mindula Dilthushan Founder at{' '}
              {'\n'}Alpha X Software Company.
            </Text>
            <Text style={styles.loremIpsum} />
          </View>
          <View style={styles.materialButtonDarkRow}>
            <MaterialButtonDark
              caption="Sign In"
              style={styles.materialButtonDark}
            />
            <MaterialButtonGrey
              caption="Sign Up"
              style={styles.materialButtonGrey}
            />
          </View>
        </View>
      </View>
      <Image
        source={require('../assets/images/Copy_of_modern_corporate_logo_black_and_white_colors__-_Made_with_PosterMyWall_(1)1.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  rect: {
    top: 0,
    left: 0,
    width: 411.5,
    height: 292,
    position: 'absolute',
    backgroundColor: 'rgba(235,59,90,1)',
    borderRadius: 50,
  },
  welcome: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    marginTop: 40,
    marginLeft: 26,
  },
  rect1: {
    top: 82,
    left: 0,
    width: 411.5,
    height: 231,
    position: 'absolute',
    backgroundColor: 'rgba(235,59,90,1)',
  },
  welcome1: {
    top: 0,
    left: 0,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
  },
  loremIpsum: {
    top: 3,
    left: 8,
    position: 'absolute',
    fontFamily: 'roboto-regular',
    color: '#000000',
  },
  welcome1Stack: {
    width: 248,
    height: 60,
    marginTop: 5,
    marginLeft: 26,
  },
  materialButtonDark: {
    height: 36,
    width: 130,
    // backgroundColor: '#ffffff',
    overflow: 'visible',
    borderRadius: 20,
  },
  materialButtonGrey: {
    height: 36,
    width: 130,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginLeft: 35,
  },
  materialButtonDarkRow: {
    height: 36,
    flexDirection: 'row',
    marginTop: 53,
    marginLeft: 55,
    marginRight: 60,
  },
  rectStack: {
    width: 409,
    height: 313,
    marginTop: 348,
  },
  image: {
    width: 260,
    height: 260,
    marginTop: -614,
    marginLeft: 75,
  },
});

export default App;
