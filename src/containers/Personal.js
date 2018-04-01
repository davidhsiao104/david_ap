import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picture from '../components/Picture'

class Personal extends Component {
	

	render(){
		const { nameCard,fileMap } = this.props

		return (
			<div className="personal">
			 	<div className="avatar">
					<Picture fileMap={fileMap} fid={nameCard.picId} />
				</div>
				性名:{nameCard.name}
			</div>
			)
	}
}

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = (dispatch) => {

}

export default connect()(Personal);