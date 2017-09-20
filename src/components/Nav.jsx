import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-default">
            <div className="navbar-left col-md-8">
              <p className="navbar-brand">React Weather App</p>
              <Link className="btn btn-default" to="/">Get Weather</Link>
              <Link className="btn btn-default" to="/about">About</Link>
              <Link className="btn btn-default" to="/examples">Examples</Link>
            </div>
            <div className="navbar-right col-md-4">
              <form className="input-group">
                <input className="form-control" type="search"
                       placeholder="Search weather by city"
                       ref="search"/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-primary"
                        value="Get weather">
                  Submit
                </button>
                </span>
              </form>
            </div>
          </nav>
        </div>
        /*<div>
         <nav className="navbar navbar-default">
         <div className="nav navbar-left navbar-nav">
         left
         </div>
         <div className="nav navbar-right navbar-nav">
         right
         </div>
         </nav>
         </div>*/
    );
  }
}

export default Nav;