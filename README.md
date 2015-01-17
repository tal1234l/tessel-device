# tessel-device
Tessel device implementation

This project include code implementations for the tessel device

# project 1 - home temperature
using the climate module to send data to AZURE event hub ,
then forward the data to two stream analytics, one for archiving and the other is an SQL database
and finally read the data from the SQLdatabase from my website

This project was created in the Microsoft IOT Hackaton, where i won a TESSEL device ... Cool !!!

prerequisite:
1. AZURE account
2. create an Event hub
3. create storage and an SQL database
4. create two stream analytics and configure the input and output.
5. configure in heach stream analytic the query
6. start the tasks of the event hub and stream analytics

Instructions:
1. run the command "node token.js" to get a token for the AZURE EventHub ,
   note that it is for 10 hours , you can change that in the AzureEventHubManager.js file.

2. copy the token to a notpad++ and make it a single string ,
   copy the string to the "eventhub_sas" variable in the config.js file

3. make all the required initialization instructions in the https://tessel.io
   don't forget to do the npm install

4. connect the tessel device to the computer (if you havent already)

5. make sure the wifi is configured and the tessel has an ip

4. run the command "tessel run TemperatureSensor.js",
   if all is working well the tessel should show a "201" response
   the data should be sent to the AZURE Event hub and from there pass through the stream analytics
   and from there stored in the SQL database.

5. create a web site that goes to the SQL database and consumes the data
   i have created a sample website but its not perfect since it was a hackaton and i didn't have much time
   https://github.com/tal1234l/microsoft


Useful links:
https://tessel.io/docs/cli
https://github.com/dx-ted-emea/iot-labs/tree/master/lab1-temperature%20sensor/src
https://manage.windowsazure.com


# project 2 - improved project for getting temperature and humidity
will be created shortly