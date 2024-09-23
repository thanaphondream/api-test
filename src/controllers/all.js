

exports.name = async (req, res, next) => {
    try{
        res.send('This is the homepage WOW');
    }catch(err){
        next(err)
    }
}

exports.Hello = async (req, res, next) => {
    try{
        res.send('Hello World')
    }catch(err){
        next(err)
    }
}
