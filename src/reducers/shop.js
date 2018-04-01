

const initState = {
  shop: {
    ownerMeta:{}
  },
  introduction: {},
  //
  serviceList: [],
  // service detail
  serviceDetail: {},
  fileMap:{}
};

export default function Shop(state=initState, action) {
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
    
    // --- INTRO ---
    // init shop data everytime
    case 'LOAD_INTRO_SUCCESS': {
      const { entity, fileMap } = action.payload;
      
      return {
        ...initState,
        shop: entity.shop,
        introduction: {
          ...entity,
        },
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
    case 'LOAD_SERVICES_DETAIL_SUCCESS': {
      const fileMap = action.payload.fileMap;
      const data = action.payload.entity;
      return {
        ...initState,
        shop: data.shop,
        serviceDetail: data,
        fileMap
      };
    }
    

    default:
      return state;
  }
}
