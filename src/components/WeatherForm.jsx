import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchWeather} from '../actions/index';

class WeatherForm extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
        <div>
          <form
              onSubmit={(event) => this.onFormSubmit(event)}
              className="input-group center">
            <input
                placeholder="Input City"
                className="form-control"
                value={this.state.term}
                onChange={(event) => this.onInputChange(event)}
            />
            <span className="input-group-btn">
               <button type="submit"
                       className="btn btn-secondary">Fetch Weather</button>
          </span>
          </form>

        </div>
    );
  }
}

export default connect(null, {fetchWeather})(WeatherForm);
