var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mqtt.thingsboard.cloud',{
    username: "oSUIcGwEf7yeXziUX175"
})

//SEND TELEMETRY
client.on('connect', function () {
  console.log('connected')
  client.publish('v1/devices/me/telemetry', '{"key-test":"value-test"}')
  client.end()
})

