import React, { Component } from 'react'
import TodoItem from './TodoItem'
import ItemEdit from './ItemEdit'

const Items = [
{ id: 0, lable: "Item one", completed: false },
{ id: 1, lable: "Item two", completed: false },
{ id: 2, lable: "Item three", completed: false }
];

class Todos extends Component {
	
	constructor() {
		super();
		this.state = {
			items: Items,
			idGen: 2
		};
	};

	// static fetchData({ store }) {
 //    	// return a promise here
    	
 //  	}



	addItem = (newLable) => {
		const newId = this.state.idGen + 1;
		const newItems = [
			...this.state.items,{
				id:newId,
				lable:newLable,
				completed: false
			}
		]

		this.setState({ items: newItems ,idGen: newId});
	}

	delItem = (id) => {
		const newItems = this.state.items.filter(ele => ele.id !== id)
		this.setState({ items: newItems });
	}

	modifyItem = (id,newLable) => {
		const newItems = this.state.items.map(ele => {
			if(ele.id !== id)
				return ele;
			return {
				...ele,
				lable: newLable
			}
		});
		this.setState({ items: newItems });
	}

	toggleItem = (id) => {
		const newItems = this.state.items.map(ele => {
			if(ele.id !== id)
				return ele;
			return {
				...ele,
				completed: !ele.completed
			}
		});
		this.setState({ items: newItems });
	}


	render(){		

		return (
			<div className="wrapper">
			<ItemEdit item={{lable:''}} onSubmit={this.addItem} />

			{
				this.state.items.map(todo =>
					<TodoItem
					key={todo.id}
					item={todo}
					onComplete={() => this.toggleItem(todo.id)}
					onDel={()=> this.delItem(todo.id)}
					onEdit={this.modifyItem}
					/> 
				)
			}
			</div>
			)
	}
}

export default Todos;