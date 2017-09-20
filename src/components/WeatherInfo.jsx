import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherInfo extends Component {

  renderWeather(cityData) {

    const name = cityData.name;
    const temp = cityData.main.temp;
    const pres = cityData.main.pressure;
    const hum = cityData.main.humidity;

    return (
        <div>
          <p>Temperature in {name} is {temp}</p>
          <p>Pressure is {pres} hPa and humidity {hum} %</p>
        </div>
    );
  }

  render() {

    if (!this.props.weather) {

      return (
          <div>
            <h5>Enter city name</h5>
          </div>
      );
    }

    return (
        <div>
          {this.renderWeather(this.props.weather)}
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather.data};
}

export default connect(mapStateToProps)(WeatherInfo);