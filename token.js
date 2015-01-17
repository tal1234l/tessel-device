/**
 * Created by talwa_000 on 15/01/15.
 */
var config = require('./config');
var AzureEventHubManager = require("./AzureEventHubManager.js");
var aehm = new AzureEventHubManager(config.eventhub_namespace, config.eventhub_hubname ,config.eventhub_keyname, config.eventhub_keyvalue);
console.log(aehm.create_sas_token("https://climate-westeurope.servicebus.windows.net/climate123/publishers/Device01/messages"));