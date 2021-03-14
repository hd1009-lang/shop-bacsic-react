import jwt from 'jsonwebtoken'

const createToken=(id)=>{
  return jwt.sign({id},process.env.TOKEN_SECRET,{
    expiresIn:'30m'
  })
}

export default createToken