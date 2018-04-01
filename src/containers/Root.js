import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import HeadBar from '../components/HeadBar'
import Footer from '../components/Footer'

class Root extends Component {
	static PropTypes = {
		children: PropTypes.node
	}

	render(){
		const { children } = this.props

		return (
			<div className="wrapper">
				<HeadBar />
				{children}
				<Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Root);