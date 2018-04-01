import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Personal from '../components/Personal'
import ShopNavigation from '../components/ShopNavigation'
import * as Actions from '../actions/shop';

class Shop extends Component {
	static PropTypes = {
		children: PropTypes.node
	}

	render(){
		const { children,shop,nameCard,fileMap } = this.props

		return (
			<div className="shop-main">
				<div className="shop-cover">
					商店封面

					<h1>{shop.name}</h1>
					<h1>{shop.summary}</h1>
				</div>
				<ShopNavigation sid={shop.sid || 0}/>
				 <div className="double-col row">
			        <div className="left-col">
			          {children}
			        </div>
			        <div className="right-col">
			          <Personal nameCard={nameCard} fileMap={fileMap}/>
			        </div>
			      </div>
		      </div>
			)
	}

	componentDidMount(){
		// if(this.props.params.sid)
		// 	this.props.loadShopData(this.props.params.sid);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		shop:state.shopReducer.shop,
		nameCard:state.shopReducer.shop.ownerMeta,
		fileMap:state.shopReducer.fileMap
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadShopData: sid => dispatch(Actions.loadShopBySid(sid))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);