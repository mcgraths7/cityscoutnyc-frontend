import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import GeoSuggest from 'react-geosuggest'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import getAddress from '../actions/getAddress'
import getScores from '../actions/getScores'
import getLocation from '../actions/getLocation'

// onSuggestSelect is triggered when a suggest is selected. Location object contains lat long.
class SubmitAddressContainer extends Component {
  render(){
    return (
      <ReactCSSTransitionGroup
        component={"div"}
        transitionName="landing"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionAppear={false}>
          <GeoSuggest
            style={{'suggests': {'listStyleType': 'none'}, 'suggestItem': {'color':'white', 'cursor': 'pointer'}}}
            className="button text"
            id="textBar"
            placeholder="Enter address"

            onSuggestSelect={this.props.handleSubmit.bind(this)}/>
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps(state){
  return {
    address: state.address,
    coords: state.coords
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getScores, getAddress, getLocation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAddressContainer)
