const mqtt = require('mqtt')
const { broker, topic } = require('../config')

const mqttClient = mqtt.connect(broker)
 
const onConnect = () => {
  console.log('connected')
  mqttClient.subscribe(topic)
}

const onMessage = (topic, message) => console.log(message.toString())
  
mqttClient.on('connect', onConnect)
mqttClient.on('message', onMessage)