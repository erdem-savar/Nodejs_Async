const express = require('express');
const Business = require('./business');

const api = express();

api.use("/get", (req, res, next) => {

    main();

    res.json({
        success : true
    });

});

const main = async () => {
    
    console.log('Process started');
    const business = new Business();


    const ret = await business.method1();
 
    console.log(ret);


    console.log('Process end');
}



api.listen(2121, () => {

    console.log("App started on 2121 port");

});