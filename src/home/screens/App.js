import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import Svg, {Ellipse} from 'react-native-svg';
import MaterialButtonPink from '../components/MaterialButtonPink';

function App(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(242,169,181,1)"
      />
      <View style={styles.imageStackRow}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require('../assets/images/Copy_of_modern_corporate_logo_black_and_white_colors__-_Made_with_PosterMyWall_(1).jpg')}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}>
            <Text style={styles.welcomeTo}>WELCOME TO</Text>
          </ImageBackground>
          <Svg viewBox="0 0 450 450" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(235,59,90,1)"
              cx={225}
              cy={225}
              rx={225}
              ry={225}
            />
          </Svg>
        </View>
        <View style={styles.materialButtonPink2Column}>
          <MaterialButtonPink
            caption="Login"
            style={styles.materialButtonPink2}
          />
          <MaterialButtonPink
            caption="Login"
            style={styles.materialButtonPink1}
          />
        </View>
      </View>
      <Svg viewBox="0 0 260.33 259.88" style={styles.ellipse1}>
        <Ellipse
          stroke="rgba(230, 230, 230,1)"
          strokeWidth={0}
          fill="rgba(235,59,90,1)"
          cx={130}
          cy={130}
          rx={130}
          ry={130}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  image: {
    width: 290,
    height: 290,
    position: 'absolute',
    left: 297,
    top: 0,
  },
  image_imageStyle: {},
  welcomeTo: {
    fontFamily: 'strait-regular',
    color: 'rgba(235,59,90,1)',
    fontSize: 27,
    marginTop: 12,
    marginLeft: 60,
  },
  ellipse2: {
    top: 261,
    left: 0,
    width: 450,
    height: 450,
    position: 'absolute',
  },
  imageStack: {
    width: 587,
    height: 711,
  },
  materialButtonPink2: {
    height: 36,
    width: 122,
    backgroundColor: 'rgba(75,123,236,1)',
  },
  materialButtonPink1: {
    height: 36,
    width: 122,
    backgroundColor: 'rgba(75,123,236,1)',
    marginTop: 28,
  },
  materialButtonPink2Column: {
    width: 122,
    marginLeft: 189,
    marginTop: 216,
    marginBottom: 395,
  },
  imageStackRow: {
    height: 711,
    flexDirection: 'row',
    marginTop: 175,
    marginLeft: -241,
    marginRight: -297,
  },
  ellipse1: {
    width: 260,
    height: 260,
    marginTop: -992,
    marginLeft: 264,
  },
});

export default App;
