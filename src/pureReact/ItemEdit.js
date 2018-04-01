import React, { Component } from 'react'

class ItemEdit extends Component {
	
	constructor(props) {
		super();
		this.state = {
			lable: props.item.lable
		};
	};

	render(){
		const {onSubmit} = this.props
		return (
			<div>
			<input value={this.state.lable} onChange={e => this.setState({lable:e.target.value}) } />	
					    
			<button type='button' 
				onClick={
					()=>{
						onSubmit(this.state.lable)
						this.setState({lable:''})
					}
				} >{'Submit'}</button>
			</div>
			);
	}
}



export default ItemEdit;