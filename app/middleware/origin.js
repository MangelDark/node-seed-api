const checkOrigin = (req,res,next) =>{

    const token = req.headers.authorization.split(' ').pop();
    if(token === '12345'){
        next();
    }
    else {
        res.status(403); 
        res.send({error:'Tu por aqui no pasas!'})
    }

};

module.exports = checkOrigin;