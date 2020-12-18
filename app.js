async function main () {
  // Check koneksi ke rmq
  let conn = await require('./setup').connectToRmq()
  // Pemanggilan service untuk consume dari topic
  require('./services/consumer').consume(conn)
}

main()