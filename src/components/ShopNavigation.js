import React from 'react';
import { Link } from 'react-router';

const ShopNavigation = (props) => {
  
  return (
    <div className="ShopNavigation">
      		<ul>
				<li>
					<Link						
						to={`/shop/${props.sid}/introduction`}>
						商店介紹
					</Link>
				</li>
				<li>
					<Link						
						to={`/shop/${props.sid}/goods`}>
						服務項目
					</Link>
				</li>
				<li>				
						作品展示
					
				</li>
			</ul>
    </div>
  );
}

export default ShopNavigation;