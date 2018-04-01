import { match } from 'react-router';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';

//universal
import configureStore from '../src/config/configureStore.js';
import routes from '../src/config/routes.js';

const config = require('./config/config');
const logger = require('./config/logger.js');


const handleError = (res, err) => {
  logger.error(err);
  res.status(500).render('500', {               
        assetsPath: config.assetsPath
    });
}
const handleNotFound = (res, userAgent) => {
  if(userAgent) logger.warn('Not found, user-agent:',userAgent);
  res.status(404).render('404', {               
        assetsPath: config.assetsPath
    });
}
const handleRedirect = (res, redirectLocation) => {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}


const handleRoutes = (res, renderProps, ua) => {  
  // create Store
  const store = configureStore({});

  const getReduxPromise = () => {    
	  let { query, params } = renderProps;
    let comp = renderProps.components[renderProps.components.length - 1];
    
    if(comp.WrappedComponent) 
      comp = comp.WrappedComponent;
    
    let promise = comp.fetchData ?
          comp.fetchData({ query, params, store }) :
          Promise.resolve();
    return promise;    
  }
  
  getReduxPromise().then(() => {
  	let reduxState = JSON.stringify(store.getState());

    logger.debug('==Start SSR process==');
    let html = renderToString( 
      <Provider store={store}>
        <RouterContext {...renderProps}/>
      </Provider>
    );
    logger.debug('==End SSR process==');

    res.status(200).render('index', {
	    html,
	    preloadedState: reduxState,
	    assetsPath: config.assetsPath
	  });
  }).catch(err => {    
    handleError(res, err)
  });
}


export default function ssrMiddleware(req, res) {  
  logger.info(`===Catch Request From ${req.originalUrl}===`);  
  match({ routes, location: req.url, /*history*/ }, (err, redirectLocation, renderProps) => {
    // console.log(renderProps)
    // global.navigator.userAgent = req.userAgent;
    if (err) handleError(res,err);
    else if(redirectLocation) handleRedirect(res, redirectLocation);
    else if(renderProps) handleRoutes(res, renderProps, req.headers['user-agent']);
    else handleNotFound(res,req.headers['user-agent']);

  });
}