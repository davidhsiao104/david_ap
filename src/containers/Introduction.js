import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../actions/shop';

class Introduction extends Component {
	
	static PropTypes = {
		introduction: PropTypes.object
	}

	static fetchData({ params,store }) {
    	// return a promise here
    	return store.dispatch(Actions.loadIntroBySid(params.sid));
  	}

	render(){
		const { introduction } = this.props

		return (
			<div className="introduction">
				商店介紹
				<div>{introduction.description}</div>
				<div>{introduction.areaList}</div>
				<div>{introduction.certList}</div>
				<div>{introduction.langList}</div>
				<div>{introduction.other}</div>

			</div>
			)
	}

	componentDidMount(){
		if(this.props.params.sid)
			this.props.loadShopIntroData(this.props.params.sid);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		introduction:state.shopReducer.introduction		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadShopIntroData: sid => dispatch(Actions.loadIntroBySid(sid))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Introduction);