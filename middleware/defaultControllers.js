import { crudControllers } from './crud.js'
import Candidate from '../models/candidateModel.js'
import Company from '../models/companyModel.js'
import CvPro from '../models/cvProModel.js'
import Offer from '../models/offerModel.js'
import Recruiter from '../models/RecruiterModel.js'
import School from '../models/schoolModel.js'
import User from '../models/userModel.js'
import Candidature from "../models/candidatureModel.js";

export const candidateController =  crudControllers(Candidate)
export const candidatureController =  crudControllers(Candidature)
export const companyController =  crudControllers(Company)
export const cvProController =  crudControllers(CvPro)
export const offerController =  crudControllers(Offer)
export const recruiterController =  crudControllers(Recruiter)
export const schoolController =  crudControllers(School)
export const userController =  crudControllers(User)