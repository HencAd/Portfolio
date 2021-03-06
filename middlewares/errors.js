const path = require('path');

exports.notFound = (req,res,next) => {
    const err = new Error ('404 Page not found');
    err.status=404;
    next(err);
};

exports.catchErrors = (err, req,res,next) => {
    res.status(err.status || 500);
    res.sendFile(path.join(__dirname,'../views', 'error.html'));

}