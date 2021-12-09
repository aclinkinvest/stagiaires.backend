import mongoose from 'mongoose'

const cvProSchema = mongoose.Schema({
    recruiter: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Recruiter',
      required: true,
    },
    genre: String,
    Lieu: String,
    paid: String,
    studyLevel: String,
    carrierLevel: String,
    experience: Number,
    deadline: Date,
    duration: Number,
    description: String,
    missions: String,
    jobDescription: [String],
    profile: [String],
    musts: [String],
    applicationDocuments: [String],
    skills: [String],
    recruitmentProcedure: String,

})

const CvPro = mongoose.model('CvPro', cvProSchema)

export default CvPro