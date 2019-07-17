const mqtt = require('mqtt')
const { broker, topic } = require('../config')

const mqttClient = mqtt.connect(broker)

const onPublish = () => {
  console.log('A message has been sent!')
  mqttClient.end()
}
const onConnect = () => mqttClient.publish(topic, 'Hello mqtt', onPublish)

mqttClient.on('connect', onConnect)

