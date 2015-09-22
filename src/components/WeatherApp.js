'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var WeatherApp = React.createClass({
  render: function() {
    var { location, degrees, weather } = this.props;
    return (
      <View style={styles.weatherApp}>
        <Text style={styles.degrees}>
          {degrees}˚
        </Text>
        <Text style={styles.location}>
          {location}
        </Text>
        <Text style={styles.weather}>
          {weather}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  weatherApp: {
    padding: 20,
    backgroundColor: 'green',
    height: 400
  },
  degrees: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    color: '#000',
    fontFamily: 'Helvetica Neue'
  },
  location: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ccc',
    fontFamily: 'Helvetica Neue'
  },
  weather: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Helvetica Neue'
  }
});

module.exports = WeatherApp;
