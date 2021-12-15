import mongoose from 'mongoose'

const candidatureSchema = mongoose.Schema({
    available: Boolean,
    schoolName: String,
    resumeConformity: Number,
    candidate: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Candidate',
      required: true,
    },
    offer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Offer',
    },
    cvPro: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'CvPro',
    },
    cvFile: Buffer,
})

const Candidature = mongoose.model('Candidature', candidatureSchema)

export default Candidature