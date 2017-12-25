'use strict'
const router = require('koa-router')();
const checkBody = require('public/script/checkBody');
const checkToken = require('public/script/checkToken');
const Index = require('server/controller/index');
// router.prefix('/users');

router.get('/', checkToken, checkBody, Index.getIndex);
router.get('/login', checkToken, checkBody, Index.getLogin);
router.post('/login', checkToken, checkBody, Index.postLogin);
router.post('/resetPasswd', checkToken, checkBody, Index.postResetPasswd);
router.get('/resetPasswd', checkToken, checkBody, Index.getResetPasswd);
router.post('/logout', checkToken, checkBody,  Index.logout);

module.exports = router;
