'use strict'
class IndexController {
    static async getIndex(ctx) {
        ctx.body = {
            content: 'Hello Koa 2!'
        }
    }

    static async getLogin(ctx) {
        ctx.body = {
            content: 'Hello Koa 2!'
        }
    }

    static async postLogin(ctx) {
        ctx.body = {
            content: 'Hello Koa 2!'
        }
    }

    static async postResetPasswd(ctx) {
        ctx.body = {
            content: 'Hello Koa 2!'
        }
    }

    static async getResetPasswd(ctx) {
        ctx.body = {
            content: 'Hello Koa 2!'
        }
    }

    static async logout(ctx) {
        ctx.body = {
            content: 'Hello Koa 2!'
        }
    }
}
module.exports = IndexController;