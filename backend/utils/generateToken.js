import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    });
    res.cookie("jwt",token,{
        maxAge: 15*24*60*1000,  //MS format cookie lives
        httpOnly: true, // prevent XSS attack cross site scripting attack, prevent javascrtip from accessing the token
        sameSite:"strict", //CSRF attack cross site request forgery attack
        secure: process.env.NODE_ENV !== "development"
    });
};


export default generateTokenAndSetCookie;

