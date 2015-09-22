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
    return { hasLocation: false, hasWeather: false, location: null, degrees: null, weather: null  }
  },

  getWeather: function(location) {
    this.setState( {hasLocation: true} ) ;

    var lat = location.coords.latitude;
    var lon = location.coords.longitude;

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

    // getWeather
    // this.setState({hasLocation: true, location: location})
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (initialPosition) => this.getWeather(initialPosition),
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  },

  render: function() {
    var { hasWeather, hasLocation, location, degrees, weather } = this.state;
    if( hasLocation && !hasWeather) {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>Cool, we got your location.. Checking weather!</Text>
        </View>
      );
    } else if ( hasLocation && hasWeather) {
      return <WeatherApp styles={styles.container}
                  location={location}
                  degrees={degrees}
                  weather={weather} />
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.loading}>You probably need to allow me to get your location!</Text>
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    fontSize: 20
  }
});

AppRegistry.registerComponent('robert_and_kims_weather_app', () => robert_and_kims_weather_app);
