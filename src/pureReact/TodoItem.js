import React, { Component } from 'react'
import ItemEdit from './ItemEdit'

class TodoItem extends Component {
	
	constructor(props) {
		super();
		this.state = {
			editMode: false
		};
	};

	toggleEdit = () => {
		this.setState({editMode: !this.state.editMode})
	}



	render(){
		const {item,onDel,onEdit,onComplete} = this.props

		const view  = this.state.editMode ? (<ItemEdit item={item} onSubmit={(newValue) => {
				onEdit(item.id,newValue)
				this.toggleEdit()
			}} />) 
			: (
				<div>
					<li
						onClick={onComplete}
						style={{
							textDecoration: item.completed ? 'line-through' : 'none'
						}}
					>
					{item.lable}    
					</li>
						<button type='button' onClick={onDel} >{'del'}</button>
						<button type='button' onClick={this.toggleEdit} >{'edit'}</button>
				</div>
			);

		return view;
	}
}

export default TodoItem;