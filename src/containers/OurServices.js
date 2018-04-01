import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Actions from '../actions/shop';
import { Link } from 'react-router';


class OurServices extends Component {
	static PropTypes = {
		serviceList: PropTypes.array
	}

	render(){
		const { serviceList } = this.props

		return (
			<div>				
				項目列表	
				<ul>
				{
					serviceList.map(item=><li key={item.gid}><Link	to={`/shop/goods/${item.gid}`}>	{item.title}</Link></li>)
				}
				</ul>
		     </div>
			)
	}

	componentDidMount(){
		if(this.props.params.sid)
			this.props.loadOurServices(this.props.params.sid);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		serviceList:state.shopReducer.serviceList		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadOurServices: sid => dispatch(Actions.loadOurServicesBySid(sid))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(OurServices);