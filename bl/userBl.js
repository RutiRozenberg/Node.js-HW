const { userModel } = require('../services/userService')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = '7hjfygjh45bnchn575ngjgfn5gffhgfdj54hgjn5da6eaad5efea6db9aeaa5c62a52fb91234bea83ba65544c710209fc'


const getAllUsers = async () => {

    const users = await userModel.find().exec()
    return users;
}

const getUser= async (email)=>{
    const users = await getAllUsers()
    const user = users.find(u=> u.email===email)
    return user;
}

const getToken = async (email, password) => {
    const user = await getUser(email)
    if(user && await bcrypt.compare(password, user.password)){
        const token = jwt.sign({ _id: user.email, name: user.name },
            secret, {
                expiresIn: "2h",
            }
        )
        return token
    }
    return null

}

const editUser =async (user)=>{
    const encryptedPassword = await bcrypt.hash(user.password, 10)
    await userModel.insertMany({name: user.name, email: user.email , password: encryptedPassword})
}

module.exports = {
    getToken,
    getAllUsers,
    getUser,
    editUser
}