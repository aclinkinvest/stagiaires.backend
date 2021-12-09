import express from 'express'
import mongoose from 'mongoose'

const companySchema = mongoose.Schema({
    name: String,
    logo: String,
    staffEmail: String,
    phone: String,
    address: String,
    domainActivity: String,
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Company = mongoose.model('Company', companySchema)
export default Company