
function TimeAndurl(req, res, next){
    const nowDate=new Date()
    console.log('Time:', nowDate.getDate(),"/",nowDate.getMonth()+1,"/",nowDate.getFullYear()," ",nowDate.getHours(),":",nowDate.getMinutes(),":",nowDate.getSeconds())
    console.log('Request URL:', req.originalUrl) 
    next()
} 


module.exports = TimeAndurl
