import jwt from "jsonwebtoken"
import nodemailer from 'nodemailer'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()
const SECRET = process.env.SECRET;
const HOST =  process.env.SMTP_HOST
const PORT =  process.env.SMTP_PORT
const USER =  process.env.SMTP_USER
const PASS =  process.env.SMTP_PASS

import User from '../models/userModel.js'
import Candidate from "../models/candidateModel.js";
import Recruiter from "../models/RecruiterModel.js";


export const me = (req, res) => {
  res.status(200).json({ data: req.user })
}

export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const signin = async (req, res)=> {
    const { email, password } = req.body //Coming from formData

    try {
        const existingUser = await User.findOne({ email })

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" })

        const isPasswordCorrect  = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials"})

        //If crednetials are valid, create a token for the user
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET, { expiresIn: "1h" })
        
        //Then send the token to the client/frontend
        res.status(200).json({ result: existingUser, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong"})
    }
}



export const signup = async (req, res)=> {
    const { email, password, confirmPassword, firstName, lastName, bio, role } = req.body

    try {
        const existingUser = await User.findOne({ email })

        if(existingUser) return res.status(400).json({ message: "User already exist" })

        if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match" })
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, bio, role })

        if (role !== "recruiter") {
            await Candidate.create({ user: result})
        } else await Recruiter.create({ user: result})

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET, { expiresIn: "1h" })
        
        res.status(200).json({ result, token })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong"}) 
    }
}


// export const updateProfile = async (req, res) => {
//     const formData = req.body
//     const { id: _id } = req.params
//     console.log(formData)

//     if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No user with this id found')

//     const updatedUser = await User.findByIdAndUpdate(_id, formData, {new: true})
//     res.json(updatedUser)
// }




export const forgotPassword = (req,res)=>{

    const { email } = req.body
  
       // NODEMAILER TRANSPORT FOR SENDING POST NOTIFICATION VIA EMAIL
        const transporter = nodemailer.createTransport({
            host: HOST,
            port : PORT,
            auth: {
            user: USER,
            pass: PASS
            },
            tls:{
                rejectUnauthorized:false
            }
        })
  
  
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email : email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User does not exist in our database"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"Stagiaires.tg <support@stagiaires.tg>",
                    subject:"Réinitialisation de votre mot de passe",
                    html:`
                    <p>Vous avez demandé une réinitialisation de votre mot de passe sur Stagiaires.tg</p>
                    <h5>Veuillez cliquer sur ce <a href="https://stagiaires.tg/reset/${token}">lien</a> pour ce faire</h5>
                    <p>Le lien n'est pas cliquable, copiez et collez l'adresse suivante dans votre barre d'adresse.</p>
                    <p>https://stagiaires.tg/reset/${token}</p>
                    <P>Si c'était une erreur, ignorez cet e-mail et rien ne se passera.</P>
                    `
                })
                res.json({message:"Vérifiez votre email"})
            }).catch((err) => console.log(err))
  
        })
    })
  }
  
  
  
  export const resetPassword = (req,res)=>{
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        bcrypt.hash(newPassword,12).then(hashedpassword=>{
           user.password = hashedpassword
           user.resetToken = undefined
           user.expireToken = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })
        })
    }).catch(err=>{
        console.log(err)
    })
  }
