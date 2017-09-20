import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions'
import {bindActionCreators} from 'redux';

import WeatherForm from './WeatherForm';
import WeatherInfo from './WeatherInfo';

class Weather extends Component {

  render() {
    return (
        <div className="col-md-4 col-offset-md-8">
          <p></p>
          <WeatherForm/>
          <WeatherInfo/>
        </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      {fetchWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);