// import jwt from  "jsonwebtoken"
// import cartRouter from "../routes/cartRoute"

// const authMiddleware = async(req,res,next)=>{
//     const {token} = req.headers;
//     if(!token) {
//         return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     try{
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();

//     } catch(error){
//         console.log(error);
//         res.json({success:false, message:"Error"})

//     }

    


// }

// export default authMiddleware;


// import jwt from 'jsonwebtoken';

// const authMiddleware = async (req, res, next) => {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'Not Authorized. Please login again.' });
//   }
  

//   try {
//     const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = decodedToken.id;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(403).json({ success: false, message: 'Invalid token. Please login again.' });
//   }
// };

// export default authMiddleware;


import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next)=>{
    const  {token} = req.headers;
    if(!token){
        return res.json({success:false, message:"Not Authorized Login Again"})

    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();

    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})

    }
}

export default authMiddleware;