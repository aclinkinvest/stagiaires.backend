import express from 'express'
import {
    createCvPro,
    deleteCvPro,
    getCvPro,
    getCvProsForCandidate,
    getCvProsForRecruiter,
    updateCvPro
} from "../controllers/cvPro.js";

const router = express.Router()

router.get('/:id', getCvPro)
// router.get('/creator', getInvoicesByUser);
router.get('/', getCvProsForRecruiter)
router.get('/', getCvProsForCandidate)
router.post('/', createCvPro)
router.patch('/:id', updateCvPro)
router.delete('/:id', deleteCvPro)


export default router