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

var WeatherApp = require('./src/components/WeatherApp');

var robert_and_kims_weather_app = React.createClass({
  getInitialState: function() {
    return { position: false, lat: false, lon: false}
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.setState({lat: initialPosition.coords.latitude, lon: initialPosition.coords.longitude}),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  render: function() {
    var { lat, lon } = this.state

    if(!lat && !lon) {
      return <Text style={styles.loading}>PLEASE LET ME HAVE YOUR POSITION</Text>;
    } else {
      return <WeatherApp lat={lat} lon={lon} />;
    }
  }
});

var styles = StyleSheet.create({
  loading: {
    padding: 100,
    fontSize: 20,
    color: 'red',
    height: 200
  }
});

AppRegistry.registerComponent('robert_and_kims_weather_app', () => robert_and_kims_weather_app);
