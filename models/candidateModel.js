import mongoose from 'mongoose'

const candidateSchema = mongoose.Schema({
    available: Boolean,
    schoolName: String,
    profilePhoto: String,
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    school: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'School',
    },
    /*skills: [String],*/
    cvPro: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'CvPro',
    },
    cvFile: Buffer,
})

const Candidate = mongoose.model('Candidate', candidateSchema)

export default Candidate