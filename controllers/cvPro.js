import express from 'express'
import mongoose from 'mongoose'

import Candidate from '../models/candidateModel.js'
import CvPro from "../models/cvProModel.js";


export const getCvProsForCandidate = async (req, res) => {
    const {candidate} = req.query;
    try {
        const cvPros = await CvPro.find({ owner: candidate.id});
        res.status(200).json({ data: cvPros });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getCvProsForRecruiter = async (req, res) => {
    const {searchQuery} = req.query;

    try {
        const cvPros = await CvPro.find({ creator: searchQuery });
        // const cvPros = await CvPro.find().where('creator').in(searchQuery);

        res.status(200).json({ data: cvPros });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getAllCvPros = async (req, res) => {

    try {
        const allCvPros = await CvPro.find({}).sort({_id:-1})
        //find({}).sort({_id:-1}) to sort according to date of creation

        res.status(200).json(allCvPros)

    } catch (error) {
        res.status(409).json(error.message)
        
    }
    
}




export const createCvPro = async (req, res) => {

    const cvPro = req.body

    const newCvPro = new CvPro(cvPro)

    try {
        await newCvPro.save()
        res.status(201).json(newCvPro)
    } catch (error) {
        res.status(409).json(error.message)
    }
}

export const getCvPro = async (req, res) => {
    const { id } = req.params;

    try {
        const cvPro = await CvPro.findById(id);
        
        res.status(200).json(cvPro);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateCvPro = async (req, res) => {
    const { id: _id } = req.params
    const cvPro = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No cvPro with that id')

    const updatedCvPro = await CvPro.findByIdAndUpdate(_id, {...cvPro, _id}, { new: true})

    res.json(updatedCvPro)
}


export const deleteCvPro = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No cvPro with that id')

    await CvPro.findByIdAndRemove(id)

    res.json({message: 'CvPro deleted successfully'})
}