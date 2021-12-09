import express from 'express'
import mongoose from 'mongoose'

const schoolSchema = mongoose.Schema({
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

const School = mongoose.model('School', schoolSchema)
export default School