import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TestForm from '../components/TestForm'
import {testFormSubmit} from '../actions/test'


class Test extends Component {
	static PropTypes = {
		children: PropTypes.node
	}

	render(){
		const { children,testSubmit,testForm } = this.props

		return (
			<div className="wrapper">
				<TestForm onSubmit={testSubmit} initialValues={testForm} />
				
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		testForm:state.testForm
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		testSubmit:(value) => alert(value)		
		//testSubmit:(value) => dispatch(testFormSubmit(value))		
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);