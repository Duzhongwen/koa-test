'use strict'
const router = require('koa-router')();
const checkBody = require('../../modules/checkBody');
const checkToken = require('../../modules/checkToken');
const Index = require('../../server/controller/index');
// router.prefix('/users');

router.get('/', checkToken, Index.getIndex);
router.get('/login', checkToken, Index.getLogin);
router.post('/login', checkToken, checkBody, Index.postLogin);
router.post('/resetPasswd', checkToken, checkBody, Index.postResetPasswd);
router.get('/resetPasswd', checkToken, Index.getResetPasswd);
router.post('/logout', checkToken, checkBody,  Index.logout);

module.exports = router;
