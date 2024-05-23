 
function CheckBody(req, res, next){
    console.log(req.method);
    if((req.method=='PUT' || req.method=='POST') && Object.keys(req.body).length==0){
        res.status(400).send('please send body')
    }
    else{
        next()
    }
}


module.exports = CheckBody
  