import mongoose from 'mongoose'

const recruiterSchema = mongoose.Schema({
    isManager: Boolean,
    companyName: String,
    profilePhoto: String,
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
})

const Recruiter = mongoose.model('Recruiter', recruiterSchema)

export default Recruiter