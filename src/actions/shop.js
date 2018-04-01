import { CALL_API } from 'redux-api-middleware';


const BASE_URL = true ? 'http://localhost:3001/api' : 'https://icase.104dc-dev.com/api';

const LOAD_SHOP_SUCCESS = 'LOAD_SHOP_SUCCESS';
const LOAD_INTRO_SUCCESS = 'LOAD_INTRO_SUCCESS';
const UPD_AVATAR = 'UPD_AVATAR';


// export function testActionCreator() {

//   return {
//     type:"TEST_ACTION",
    
//   }
// }

export const loadShopBySid = sid => {
  return {
    [CALL_API]: {
      endpoint: `${BASE_URL}/shop/${sid}`,
      method: 'GET',     
      types: [
        'REQUEST',
        'LOAD_SHOP_SUCCESS',
        'FAILURE'
      ]
    }
  };
}

export const loadIntroBySid = sid => {
  return {
    [CALL_API]: {
      endpoint: `${BASE_URL}/shop/${sid}/introduction`,
      method: 'GET',     
      types: [
        'REQUEST',
        'LOAD_INTRO_SUCCESS',
        'FAILURE'
      ]
    }
  };
}

export const loadOurServicesBySid = sid => {  
  return {
    [CALL_API]: {
      endpoint: `${BASE_URL}/shop/${sid}/goods`,
      method: 'GET',
      types: [
        'REQUEST',
        'LOAD_MY_SERVICES_SUCCESS',
        'FAILURE'
      ]
    }
  };
};

export const loadServiceDetail = gid => {
  
  return {
    [CALL_API]: {
      endpoint: `${BASE_URL}/shop/goods/${gid}`,
      method: 'GET',
      types: [
        'REQUEST',
        'LOAD_SERVICES_DETAIL_SUCCESS',
        'FAILURE'
      ]
    }
  };
};