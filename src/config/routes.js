import React from 'react'
import { Route, IndexRoute } from 'react-router';
import Root from '../containers/Root'
import Shop from '../containers/Shop'
import Introduction from '../containers/Introduction'
import OurServices from '../containers/OurServices';
import OurServiceDetail from '../containers/OurServiceDetail'

import Test from '../containers/Test'

import Todos from '../pureReact/Todos';

export default (
	<Route path="/" component={Root}>
		<IndexRoute component={Todos} />
		<Route path="/shop/:sid" component={Shop}>
			<IndexRoute component={Introduction} />
			{/* 商店介紹 */}
			<Route path="/shop/:sid/introduction" component={Introduction}></Route>
			{/* 服務項目 */}
			<Route path="/shop/:sid/goods" component={OurServices}></Route>
			<Route path="/shop/goods/:gid" component={OurServiceDetail}></Route>
		</Route>
		<Route path="/test" component={Test}>
		</Route>		
	</Route>
);
