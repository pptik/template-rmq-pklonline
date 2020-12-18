// package
const config = require('./config')
const rmq = require('amqplib')

module.exports = {
  connectToRmq: () => {
    return new Promise(async (resolve, reject) => {
      try {
        // koneksi ke rmq berhasil
        let rmqConn = await rmq.connect(config.rmq)
        console.log('success connect to rmq')
        resolve(rmqConn)
      } catch (error) {
        // koneksi ke rmq gagal
        console.log('failed connect to rmq: ', error)
        reject(error)
      }
    })
  }
}
