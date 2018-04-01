import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TestForm from '../components/TestForm'


class Test extends Component {
	static PropTypes = {
		children: PropTypes.node
	}

	render(){
		const { children } = this.props

		return (
			<div className="wrapper">
				<TestForm />
				
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {};
}

const mapDispatchToProps = (dispatch) => {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);