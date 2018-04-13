import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import shopReducer from './shop';
import testForm from './testForm';

// const entities = (state = [], action) => {
//   if (action.payload && action.payload.data) {
//     return action.payload.data.children.map(child => child.data)
//   }
//   return state
// }
//
// const loadShopData = (state=buddyProps, action) => {
//
//   switch(action.type) {
//     case 'LOAD_INTRO_DATA' :
//       return state;
//     default:
//       return state;
//    }
// }

const rootReducer = combineReducers({
  
  // entities,
  routing,
  form:formReducer,  
  shopReducer, 
  testForm
})


export default rootReducer;
