const mqtt = require('mqtt')
const { broker, topic } = require('./config')

const client  = mqtt.connect(broker)
 
const onConnect = () => {
  console.log('connected')
  client.subscribe(topic)
}

const onMessage = (topic, message) => console.log(message.toString())
  
client.on('connect', onConnect)
client.on('message', onMessage)