/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

// require('Skycons')

var { requireNativeComponent } = require('react-native');

// requireNativeComponent automatically resolves this to "RCT…Manager"
var SkyconClearDay = requireNativeComponent('RCTSKYClearDay', null);
var SkyconClearNight = requireNativeComponent('RCTSKYClearNight', null);
var SkyconPartlyCloudyDay = requireNativeComponent('RCTSKYPartlyCloudyDay', null);
var SkyconPartlyCloudyNight = requireNativeComponent('RCTSKYPartlyCloudyNight', null);
var SkyconCloudy = requireNativeComponent('RCTSKYCloudy', null);
var SkyconRain = requireNativeComponent('RCTSKYRain', null);
var SkyconSleet = requireNativeComponent('RCTSKYSleet', null);
var SkyconSnow = requireNativeComponent('RCTSKYSnow', null);
var SkyWind = requireNativeComponent('RCTSKYWind', null);
var SkyFog = requireNativeComponent('RCTSKYFog', null);


var robert_and_kims_weather_app = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <SkyconClearDay style={styles.skycon} />
        <SkyconClearNight style={styles.skycon} />
        <SkyconPartlyCloudyDay style={styles.skycon} />
        <SkyconPartlyCloudyNight style={styles.skycon} />
        <SkyconCloudy style={styles.skycon} />
        <SkyconRain style={styles.skycon} />
        <SkyconSleet style={styles.skycon} />
        <SkyconSnow style={styles.skycon} />
        <SkyWind style={styles.skycon} />
        <SkyFog style={styles.skycon} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'center',
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
  skycon: {
    width: 130,
    height: 130,
  }
});

AppRegistry.registerComponent('robert_and_kims_weather_app', () => robert_and_kims_weather_app);
