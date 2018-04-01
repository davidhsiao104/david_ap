const express = require('express')
const config = require('../config/config');
const logger = require('../config/logger.js');
const restTools = require('../helper/restTool.js');

const router = express.Router();
const GUEST = 0;
const JAVA_URL = config.backend.domain;


router.get('/user/:pid', (req, res) => {
	const { pid } = req.params;
	const who = GUEST;

	restTools.callAPIGet(`${JAVA_URL}/user/${pid}/${who}`,res);	
})

router.get('/shop/:sid', (req, res) => {
  const { sid } = req.params;
  const who = GUEST;
  restTools.callAPIGet(`${JAVA_URL}/shop/${sid}/${who}`,res)

})

router.get('/shop/:sid/introduction', (req, res) => {
  const { sid } = req.params;
  const who = GUEST;
  restTools.callAPIGet(`${JAVA_URL}/shop/${sid}/introduction/${who}`,res)
})

router.get('/shop/:sid/goods', (req, res) => {
  const { sid } = req.params;
  const who = GUEST;  
  restTools.callAPIGet(`${JAVA_URL}/shop/${sid}/goods/${who}?page=0&size=10`,res)
})

// /shop/goods/:gid/:pid
router.get('/shop/goods/:gid', (req, res) => {
  const { gid } = req.params;
  const who = GUEST;  
  restTools.callAPIGet(`${JAVA_URL}/shop/goods/${gid}/${who}`,res)
})

module.exports = router;