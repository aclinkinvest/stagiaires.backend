import express from 'express'
import mongoose from 'mongoose'

import Candidate from '../models/candidateModel.js'
import Offer from "../models/cvProModel.js";


export const getOffersForCandidate = async (req, res) => {
    const {candidate} = req.query;
    try {
        const cvPros = await Offer.find({ owner: candidate.id});
        res.status(200).json({ data: cvPros });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getOffersForRecruiter = async (req, res) => {
    const {searchQuery} = req.query;

    try {
        const cvPros = await Offer.find({ creator: searchQuery });
        // const cvPros = await Offer.find().where('creator').in(searchQuery);

        res.status(200).json({ data: cvPros });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const getAllOffers = async (req, res) => {

    try {
        const allOffers = await Offer.find({}).sort({_id:-1})
        //find({}).sort({_id:-1}) to sort according to date of creation

        res.status(200).json(allOffers)

    } catch (error) {
        res.status(409).json(error.message)
        
    }
    
}




export const createOffer = async (req, res) => {

    const cvPro = req.body

    const newOffer = new Offer(cvPro)

    try {
        await newOffer.save()
        res.status(201).json(newOffer)
    } catch (error) {
        res.status(409).json(error.message)
    }
}

export const getOffer = async (req, res) => {
    const { id } = req.params;

    try {
        const cvPro = await Offer.findById(id);
        
        res.status(200).json(cvPro);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updateOffer = async (req, res) => {
    const { id: _id } = req.params
    const cvPro = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No cvPro with that id')

    const updatedOffer = await Offer.findByIdAndUpdate(_id, {...cvPro, _id}, { new: true})

    res.json(updatedOffer)
}


export const deleteOffer = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No cvPro with that id')

    await Offer.findByIdAndRemove(id)

    res.json({message: 'Offer deleted successfully'})
}