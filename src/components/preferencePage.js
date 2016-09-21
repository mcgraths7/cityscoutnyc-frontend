import React, {Component} from 'react';
import PreferencesSliderContainer from '../containers/preferencesSlidersContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory } from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import getScores from '../actions/getScores'
import Map from './map'

class PreferencePage extends Component{
  handleSubmit(event){
    const categories = ['Safety', 'Food', 'Transportation', 'Parks', 'Nightlife'];
    event.preventDefault()
    var preferences = {}
    for (var i = 0; i < categories.length; i++) {

      let value = parseInt(event.target.children[i].children[1].children[0].value, 10)
      let category = document.getElementById(`${categories[i]}`).id
      preferences[category] = value
      sessionStorage["preferences " + category] = value
    }
    this.props.getPreferences(preferences)
    browserHistory.push('/results')
  }

  render(){
    return(
      <div className="preferences-page">
          <ReactCSSTransitionGroup className="preferences-box" component="div" transitionName="route" transitionEnterTimeout={600} transitionAppearTimeout={600} transitionLeaveTimeout={600} transitionAppear={true}>
              <div className="slider-title">
                <h3>Choose your neighborhood categories</h3>
              </div>
              <div className="row">
                <div className="preference-bar col-md-6">
                <ReactCSSTransitionGroup className="sliders-test" component="div" transitionName="sliders-anim" transitionEnterTimeout={600} transitionAppearTimeout={600} transitionLeaveTimeout={600} transitionAppear={true}>
                  <PreferencesSliderContainer handleSubmit={this.handleSubmit.bind(this)} />
                </ReactCSSTransitionGroup>
                </div>
                <div className="col-md-6" ref="map">
                  <Map id='preferenceMap' address={this.props.address} coords={this.props.coords} />
                </div>
              </div>
          </ReactCSSTransitionGroup>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPreferences, getScores}, dispatch)
}

function mapStateToProps(state) {

  return {address: state.address.address, preferences: state.preferences, scores: state.scores, coords: state.coords}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencePage)
