//helps us connect to event hubs
var https = require('https');
var crypto = require('crypto');
var moment = require('moment')

var namespace = 'climate';
var hubname = 'tessel';
var keyvalue = null;
var keyname = null;


function test_hub(namespace, hubname, keyname, keyvalue)
{
    this.namespace = namespace;
    this.hubname = hubname;
    this.keyname = keyname;
    this.keyvalue = keyvalue;
}

test_hub.prototype = {

    getOptions : function(sas, payload, devicename)
    {
        return {
            hostname: 'http://'+ window.location.host,
            port: 443,
            path: '/' + this.hubname + '/publishers/' + devicename + '/messages',
            method: 'POST',
            headers: {
                'Content-Length': payload.length,
                'Content-Type': 'application/atom+xml;type=entry;charset=utf-8'
            }
        };
    },
    sendMessage : function(payload, devicename, sas)
    {
        var options = this.getOptions(sas, payload, devicename);

        var req = https.request(options, function(res) {
            console.log("statusCode: ", res.statusCode);
            console.log("headers: ", res.headers);

            res.on('data', function(d) {
                process.stdout.write(d);
            });
        });

        req.on('error', function(e) {
            console.error(e);
        });

        var res =  req.write(payload);
        req.end();
    }

}

module.exports = test_hub