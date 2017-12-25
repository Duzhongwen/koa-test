/**
 * Created by duzhongwen on 17/12/25.
 */
const APP = {
    ROOT_PATH: __dirname,
    LIMIT: 16
}

const INFO = {
    title: 'frontBlog.server',
    version: '1.0.0',
    author: 'duzhongwen',
    with: ['Node.js', 'MongoDB', 'Koa2', 'redis']
}

const GITHUB = {
    account: '',
}

const session = {
    key: 'blog',
    maxAge: 604800000,
    overwrite: true,
    signed: true,
}

module.exports = {
    // 开发环境配置
    development: {
        APP,
        INFO,
        GITHUB,
        session,
        mongodb: {
            uri: 'mongodb://localhost:27017/front-blog'
        },
        jwt: {
            secret: 'secret',
            exprisesIn: '3h'
        },
        port: process.env.PORT || 1234
    },

    // 生产环境配置
    production: {
        APP,
        INFO,
        GITHUB,
        session,
        mongodb: {
            uri: 'mongodb://localhost:27017/front-blog'
        },
        jwt: {
            secret: 'secret',
            exprisesIn: '3h'
        },
        port: '8080'
    }
}
