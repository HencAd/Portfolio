
const sendMail = require('../mail');

exports.store = (req, res) => {

    const {name,email,msg}=req.body;
    console.log('Data:',req.body);

    sendMail(name,email,msg, function(err,data){
        if(err){
            res.status(500).json({message: 'Internal Error'});
            console.log(err);
        }else {
            res.json({message: 'Email send'});
        }
        })
};

