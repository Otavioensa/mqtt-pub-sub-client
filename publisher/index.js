const mqtt = require('mqtt')
const { broker, topic } = require('./config')

const client = mqtt.connect(broker)

const onPublish = () => client.end()
const onConnect = () => client.publish(topic, 'Hello mqtt', onPublish)

client.on('connect', onConnect)

