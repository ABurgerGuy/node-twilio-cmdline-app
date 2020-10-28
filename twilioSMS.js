const { argv } = require('process');

require('dotenv').config();

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;

const userNumber = process.env.userNumber;
const smsNumber = process.env.smsNumber;

const client = require('twilio')(accountSid,authToken);

var message = "";

//arg parser
for(var i = 2; i < argv.length; i++){
    message += argv[i] + " ";
}
//arg checker
if(message == "")
{
    message = "A message was sent with no parameters";
    console.log(message);
}
console.log(message);
//sends the message to phonenumber specified
client.messages.create({
   to:userNumber,
   from:smsNumber,
   body: message
}).then((message) => console.log(message.sid));