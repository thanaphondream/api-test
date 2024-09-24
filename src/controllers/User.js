const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()


exports.username = async (req, res, next) => {
    try{
        const { email, name, password } = req.body

        const users = await prisma.user.create({
            data: {
                email,
                name,
                password
            }
        })
        res.json({users})
    }catch(err){
        next(err)
    }
}

exports.getusername = async (req, res, next) => {
    try{
        const users1 = await prisma.User.findMany()
        res.json(users1);
    }catch(err){
        next(err)
    }
}

exports.Duser = async (req, res, next) => {
    try{
        const { id } = req.params
        const users2 = await prisma.User.delete({
            where: {
                id: parseInt(id)
            }
        });
        res.json({users2})
    }catch(err){
        next(err)
    }
}

exports.Uuser = async (req, res, next) => {
    try{
      const { id } = req.params
      const { email, name, passwork} = req.body
      const user3 = await prisma.User.update({
        where: {
            id: parseInt(id)
        },
        data: {
            email,
            name,
            passwork
        }
      })
      res.json({user3})
    }catch(err){
      next(err)
    }
  }

exports.usershowid = async (req, res, next) => {
    try{
        const { id } = req.params
        const users = await prisma.user.findMany({
            where: {
                id: Number(id)
            }
        })

        res.json({users})
    }catch(err){
        next(err)
    }
}