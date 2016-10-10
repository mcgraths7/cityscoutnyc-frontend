import React, {Component} from 'react'
import SubmitAddressContainer from '../containers/submitAddressContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getAddress from '../actions/getAddress'
import getLocation from '../actions/getLocation'

class LandingPage extends Component{
  handleSubmit(event) {
    let text = event.label,
        location = event.location

    this.props.getAddress(text)
    this.props.getLocation(location)

    sessionStorage.address = text
    browserHistory.push('/preferences')
  }

  render(){
    Object.keys(sessionStorage).forEach((key) => sessionStorage.removeItem(key))
    return(
      <div className="">
        <div id="landing-page" >
          <ReactCSSTransitionGroup
            transitionName="logo"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            transitionAppear={true}>
          </ReactCSSTransitionGroup>
          <SubmitAddressContainer handleSubmit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getAddress, getLocation}, dispatch)
}

export default connect(null, mapDispatchToProps)(LandingPage)
