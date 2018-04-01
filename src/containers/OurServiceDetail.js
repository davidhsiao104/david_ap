import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../actions/shop';


class OurServiceDetail extends Component {
	static PropTypes = {
		detail: PropTypes.object
	}

	render(){
		const { detail } = this.props

		return (
			<div>
				項目內容	<br/>
				Title: {detail.title}<br/>
				內容: {detail.content}<br/>
		     </div>
			)
	}

	componentDidMount(){
		if(this.props.params.gid)
			this.props.loadServiceDetail(this.props.params.gid);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		detail:state.shopReducer.serviceDetail		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadServiceDetail: gid => dispatch(Actions.loadServiceDetail(gid))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(OurServiceDetail);