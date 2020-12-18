exports.consume = async (connection) => {
  // membuat channel baru 
  let channel = await connection.createChannel()
  // memunculkan pesan masuk
  // consume data dari topic Log
  channel.consume('Log', async (msg) => { 
    console.log(msg.content.toString())
    channel.ack(msg)
  })
}
