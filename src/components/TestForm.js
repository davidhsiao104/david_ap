import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import Joi from 'joi';
import createValidator from '../util/joiUtil.js';


const schema = Joi.object({
  name: Joi.required(),
  sex: Joi.required(),
  phone:Joi.number().integer()
});

const renderField = ({
	  input,
	  label,
	  type,
	  meta: { touched, error, warning }
	}) => (
	    <div>
	      <input {...input} placeholder={label} type={type} />
	      {touched &&
	        ((error && <span>{error}</span>) ||
	          (warning && <span>{warning}</span>))}
	    </div>
	)

class TestForm extends Component {
  
  
  render(){
  	  const { error,handleSubmit, pristine, reset, submitting } = this.props
	  return (
	    <div className="ShopNavigation">
	    	<form onSubmit={handleSubmit}>

	      	<span>姓名</span>
	      	<Field name="name" component={renderField} type="text" placeholder="Input your Name"/>
	      	<br/>
	      	<span>性別</span>
	      	<div>
	          <label><Field name="sex" component="input" type="radio" value="male"/> 男</label>
	          <label><Field name="sex" component="input" type="radio" value="female"/> 女</label>
	        </div>
	      	<br/>
	      	<span>電話</span>
	      	<Field name="phone" component={renderField} type="text" placeholder="Input your phone"/>
	      	<br/>

	      	{error && <strong>{error}</strong>}
	      	<div>
		        <button type="submit" disabled={submitting}>Submit</button>
		        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
		    </div>
	      	</form>
	      	
	    </div>
	  );
  }
}

export default reduxForm({
  form: 'contact', // a unique name for this form  
  validate: createValidator(schema)
})(TestForm);

