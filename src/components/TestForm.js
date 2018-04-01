import React from 'react';


class TestForm extends Component {
  
  constructor(props){
  	this.state.formData = {  		
  		name:'',
  		sex:null,
  		phone:''
  	}
  }

  render(){
	  return (
	    <div className="ShopNavigation">
	      	<span>姓名</span>
	      	<input type="text" name="" value={this.state.name} onClick={} />
	      	<br/>
	      	<span>性別</span>
	      	<input type="text" name="" value={this.state.name} onClick={} />
	      	<br/>
	      	<span>電話</span>
	      	<input type="text" name="" value={this.state.name} onClick={} />
	      	<br/>
	    </div>
	  );
  }
}

export default TestForm;