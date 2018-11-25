const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'katlego.kg27@gmail.com',
        pass: 'KatlegoSKSHerbbet@1011@1011'
    }
});



exports.sendContactMessage = functions.database.ref('/response/{pushKey}').onWrite(event => {
  const snapshot = event.data;
// Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }
  
  const val = snapshot.val();
  
  const mailOptions = {
	from: val.email,
    to: 'katlego.kg27@gmail.com',
    subject: val.email,
    html: val.message + '<br> <br>'+ '<b>Respond from:<b> <br>' +'Email: '+val.email+'<br>Name:'+val.name+'<br>Phone: '+val.phone
  };
  
    const mailOptionsToClient = {
	from: 'katlego.kg27@gmail.com',
    to: val.email,
    subject: 'Katlego Auto-reply',
    html:'Dear ' +val.name+ ' <br><br>This is an auto-reply to indicate that your message was successfully sent  , thank you for sending me a message. <br><br>Kind Regards,<br> Katlego Ratau'
  };
  
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});



/*Mail to client*/

  transporter.sendMail(mailOptionsToClient, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});


 
});
