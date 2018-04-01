import React from 'react';
import { Link } from 'react-router';

const HeadBar = () => {
  
  return (
    <div className="headBar">      
      這是HeadBar 【		
		<Link						
			to={`/`}>
			Pure React 
		</Link>
		】【		
		<Link						
			to={`/shop/9527`}>
			React / Redux 
		</Link>			
		】 (請開API: npm run start:api)
    </div>
  );
}

export default HeadBar;