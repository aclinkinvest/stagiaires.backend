import mongoose from 'mongoose'

const cvProSchema = mongoose.Schema({
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Candidate',
      required: true,
    },
    profilePhoto: String,
    contactInfo: {
        fistName: String,
        lastName: String,
        email: String,
        phone: String,
        website: String,
        address: String,
    },
    summary: {
        headline: String,
        professionalSummary: String,
    },
    experiences:[{
        position: String,
        /*company: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Company',
            required: true,
        },*/
        company: String,
        details: String,
        dateStart: Date,
        dateEnd: Date,
    }],
    educations:[{
        degree: String,
        /*school: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'School',
            required: true,
        },*/
        school: String,
        details: String,
        dateStart: Date,
        dateEnd: Date,
    }],
    skillGroups: [{
        groupName: String,
        skills:[String]
    }],
    honors:[{
        title: String,
        issuer: String,
        details: String,
        dateIssued: Date
    }],
    projects:[{
        title: String,
        url: String,
        dates: String,
        details: String
    }],
    recommendations:[{
        name: String,
        issuerWork: String,
        details: String,
        dateIssued: Date
    }],
    certifications:[{
        title: String,
        certifyAuthority: String,
        details: String,
        dateIssued: Date
    }],
    publications:[{
        title: String,
        publisher: String,
        url: String,
        details: String,
        datePublished: Date
    }],
    volunteering:[{
        title: String,
        publisher: String,
        url: String,
        details: String,
        dates: String
    }],
})

const CvPro = mongoose.model('CvPro', cvProSchema)

export default CvPro