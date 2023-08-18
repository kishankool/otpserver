function generateRandomOTP(length = 4) {
  const characters = '0123456789';
  let otp = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters[randomIndex];
  }

  return otp;
}

module.exports.sendOTP = async (req, res, next) => {
  try{
      // const {phone} = req.body.phone;
      const accountSid = process.env.accountSid;
      const authToken = process.env.authToken;
      const client = require('twilio')(accountSid, authToken);
      const otp = generateRandomOTP();

      client.messages
          .create({
              body: `Your otp is ${otp}  `,
              from: '+18155958349',
              to: '+917317534768'
          })
          .then(message => console.log(message.sid));
  
          res.json({msg: "otp sent successfully", status : true});
  }catch(ex){
      next(ex);
  }
};
