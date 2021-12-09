import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

import pdf from 'html-pdf'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
/*
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: 'stagiaires-tg API documentation',
            version: '1.0.0',
            description: 'stagiaires-tg API documentation',
            contact: {
              name: 'Wisdom TOHE',
              url: 'https://github.com/khafrica/stagiaires.backend.git',
            },
          },
          servers: [
            {
              url: `http://localhost:5000`,
            },
          ],
        apis:"index.js"
    }
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import invoiceRoutes from './routes/invoices.js'
import cvProRoutes from './routes/cvPros.js'
import clientRoutes from './routes/clients.js'
import userRoutes from './routes/userRoutes.js'
import profile from './routes/profile.js'
import docs from './routes/docs.js'
import pdfTemplate from './documents/index.js'
// import invoiceTemplate from './documents/invoice.js'
import emailTemplate from './documents/email.js'

const app = express()
dotenv.config()

app.use((express.json({ limit: "30mb", extended: true})))
app.use((express.urlencoded({ limit: "30mb", extended: true})))
app.use((cors()))

/*
app.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerDocs))

/!**
 * @swagger
 * definitions:
 *  User:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the user
 *     example: 'Wisdom Tohe'
 *    role:
 *     type: string
 *     description: role associated to the account (candidate, recruiter, collaborator, support, admin)
 *     example: 'candidate'
 *    email:
 *     type: string
 *     description: email of the user
 *     example: 'candidate@satagiaires.tg'
 *
 *  Candidate:
 *   type: object
 *   properties:
 *    user:
 *     type: object
 *     description: account associated to actual candidate
 *    school:
 *     type: object
 *     description: actual school document
 *    cvPro:
 *     type: object
 *     description: candidate's CV on the platform
 *    schoolName:
 *     type: string
 *     description: candidate provenance
 *    cvFile:
 *     type: buffer
 *     description: Cv uploaded by the candidate
 *    available:
 *     type: boolean
 *     description: candidate is available or not
 *
 *  Recruiter:
 *   type: object
 *   properties:
 *    user:
 *     type: object
 *     description: account associated to actual recruiter
 *    company:
 *     type: object
 *     description: actual company document
 *    isManager:
 *     type: boolean
 *     description: recruiter is manager or collaborator
 *    companyName:
 *     type: string
 *     description: provided at account creation
 *!/


*/

app.use('/invoices', invoiceRoutes)
app.use('/cv-pros', cvProRoutes)
app.use('/clients', clientRoutes)
app.use('/users', userRoutes)
app.use('/profiles', profile)
app.use('/docs', docs)


// NODEMAILER TRANSPORT FOR SENDING INVOICE VIA EMAIL
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port : process.env.SMTP_PORT,
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
    },
    tls:{
        rejectUnauthorized:false
    }
})


var options = { format: 'A4' };
//SEND PDF INVOICE VIA EMAIL
app.post('/send-pdf', (req, res) => {
    const { email, company } = req.body

    // pdf.create(pdfTemplate(req.body), {}).toFile('invoice.pdf', (err) => {
    pdf.create(pdfTemplate(req.body), options).toFile('invoice.pdf', (err) => {
       
          // send mail with defined transport object
        transporter.sendMail({
            from: `${company.businessName ? company.businessName : company.name} <hello@arcinvoice.com>`, // sender address
            to: `${email}`, // list of receivers
            replyTo: `${company.email}`,
            subject: `Invoice from ${company.businessName ? company.businessName : company.name}`, // Subject line
            text: `Invoice from ${company.businessName ? company.businessName : company.name }`, // plain text body
            html: emailTemplate(req.body), // html body
            attachments: [{
                filename: 'invoice.pdf',
                path: `${__dirname}/invoice.pdf`
            }]
        });

        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});


//Problems downloading and sending invoice
// npm install html-pdf -g
// npm link html-pdf
// npm link phantomjs-prebuilt

//CREATE AND SEND PDF INVOICE
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('invoice.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

//SEND PDF INVOICE
app.get('/fetch-pdf', (req, res) => {
     res.sendFile(`${__dirname}/invoice.pdf`)
})


app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING')
  })

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)