'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var WeatherApp = React.createClass({
  getInitialState: function() {
    return { hasLocation: false, hasWeather: false, location: null, degrees: null, weather: null  }
  },

  getWeather: function(lat, lon) {
    this.setState( {hasLocation: true} ) ;

    fetch('http://api.openweathermap.org/data/2.5/weather?units=metric&lat='+lat+'&lon='+lon)
      .then((response) => response.text())
      .then((responseText) => {
        var res = JSON.parse(responseText);
        var name = res.name;
        var degrees = Math.round(res.main.temp);
        var weather = res.weather[0].description;
        this.setState({
          hasWeather: true,
          location: name,
          degrees: degrees,
          weather: weather
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  componentDidMount: function() {
    var { lat, lon } = this.props;
    this.getWeather(lat, lon);
  },


  render: function() {
    var { hasWeather, hasLocation, location, degrees, weather } = this.state;
    if( !hasWeather) {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>Cool, we got your location.. Checking weather!</Text>
        </View>
      );
    } else {
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
  },
  loading: {
    padding: 100,
    fontSize: 20,
    color: 'red',
    height: 200
  }
});

module.exports = WeatherApp;
