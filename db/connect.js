/**
 * Created by duzhongwen on 17/12/4.
 */
const mongoose = require('mongoose')
const config = require('../config/default_conf')

const dbConfig = config[process.env.NODE_ENV||'development']
mongoose.Promise = require('bluebird')

exports.mongoose = mongoose

exports.connect = () => {
    mongoose.connect(dbConfig.mongodb.uri)

    // 连接成功
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connection open to ' + dbConfig.mongodb.uri)
})

// 连接失败
    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err)
})

// 断开连接
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection disconnected')
})

    return mongoose
}

