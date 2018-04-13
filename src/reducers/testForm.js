

const initState = {
  name:"David",
  Sex:"male",
  phone:"12345678"
}

export default function (state=initState, action) {
  switch (action.type) {
    // SHOP
    case 'LOAD_SHOP_SUCCESS': {
      const { entity, fileMap } = action.payload;
      
      return {
        ...state,
        shop: entity,
        fileMap
      };
    }
       
    
    // GOODS
    case 'LOAD_MY_SERVICES_SUCCESS': {      
      const fileMap = action.payload.fileMap;
      const data = action.payload.pager.content;
      const parent = action.payload.parent; //列表的父層結構 是shop
      return {
        ...initState,
        shop: parent,
        serviceList: data,
        fileMap        
      };
    }
    
    

    default:
      return state;
  }
}
