const fs = require('fs');
const path = require('path');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
module.exports = async function (context, req) {
    
    var thePath = path.resolve(__dirname,'..//.well-known//acme-challenge//',req.query.name);
    context.log(thePath);
    let textContent;

    try{
        textContent = await readFileAsync(thePath);//,function (err,textContent){
    }
    catch(err)
    {
        context.log.error(err);
        context.done();
    }

    context.log(`${textContent}`);
    var res = {
        body: "",
        headers: {
            "Content-Type": "text/plain"
        }
    };
    
    res.body= textContent;
    context.res=res;
    context.done();
}