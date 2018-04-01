import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Picture from './Picture'

class Personal extends Component {
	
	static PropTypes = {
		nameCard: PropTypes.object,
		fileMap: PropTypes.object
	}

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


export default Personal;