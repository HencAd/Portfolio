const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: process.env.MAILGUN_APIKEY,
        domain: process.env.MAILGUN_DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (name,email,msg,cb)=>{

    const mailOptions = {
        from: 'ada.henc@op.pl',
        to: 'ada.henc@op.pl',
        subject: 'Portfolio',
        text: [name,email,msg],

    };
    
    transporter.sendMail(mailOptions,function(err,data){
        if(err){
            cb(err,null);
        } else {
            cb(null,data);
        }
    });
}
module.exports = sendMail;