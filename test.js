/**
 * Created by talwa_000 on 15/01/15.
 */

var tessel = require('tessel'),
    http = require('http'),
    climatelib = require('climate-si7020'),
    wifi = require('wifi-cc3000');
var test_hub = require("./test_hub.js")
var aehm = new test_hub(config.eventhub_namespace, config.eventhub_hubname ,config.eventhub_keyname, config.eventhub_keyvalue)


var climate = climatelib.use(tessel.port['A']);

if (wifi.isConnected())
{
    var led1 = tessel.led[0].output(1);
    var led2 = tessel.led[1].output(0);

    climate.on('ready', function () {
        console.log('Connected to si7020');

        // Loop forever
        setImmediate(function loop () {
            climate.readTemperature('C', function (err, temp) {
                climate.readHumidity(function (err, humid) {

                    var d = new Date();
                    var payload = {
                        'deviceid':'Device01',
                        'temperature':temp.toFixed(4),
                        'humidity':humid.toFixed(4),
                        'timestamp':d.toISOString() };
                    aehm.sendMessage(JSON.stringify(payload), 'Device01', config.eventhub_sas);

                    led1.toggle();
                    led2.toggle();

                    setTimeout(loop, 300);
                });
            });
        });
    });

    climate.on('error', function(err) {
        console.log('error connecting module', err);
    });

}
else
{
    console.error('This lab requires a wifi connect. See http://start.tessel.io/wifi')
}
