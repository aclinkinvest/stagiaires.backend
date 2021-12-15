import { Router } from 'express'
import { candidateController } from '../middleware/defaultControllers.js'
import { candidatureController } from '../middleware/defaultControllers.js'
import { companyController } from '../middleware/defaultControllers.js'
import { cvProController } from '../middleware/defaultControllers.js'
import { offerController } from '../middleware/defaultControllers.js'
import { recruiterController } from '../middleware/defaultControllers.js'
import { schoolController } from '../middleware/defaultControllers.js'
import { userController } from '../middleware/defaultControllers.js'

const router = Router()

// /api/model
router
  .route('/candidate')
  .get(candidateController.getOne)
  .post(candidateController.createOne)

router
  .route('/application')
  .get(candidatureController.getOne)
  .post(candidatureController.createOne)

router
  .route('/company')
  .get(companyController.getOne)
  .post(companyController.createOne)

router
  .route('/resume')
  .get(cvProController.getOne)
  .post(cvProController.createOne)

router
  .route('/offer')
  .get(offerController.getOne)
  .post(offerController.createOne)

router
  .route('/recruiter')
  .get(recruiterController.getOne)
  .post(recruiterController.createOne)

router
  .route('/school')
  .get(schoolController.getOne)
  .post(schoolController.createOne)

router
  .route('/user')
  .get(userController.getOne)
  .post(userController.createOne)



// /api/model/:id
router
  .route('/candidate/:id')
  .get(candidateController.getOne)
  .put(candidateController.updateOne)
  .delete(candidateController.removeOne)

router
  .route('/application/:id')
  .get(candidatureController.getOne)
  .put(candidatureController.updateOne)
  .delete(candidatureController.removeOne)

router
  .route('/company/:id')
  .get(companyController.getOne)
  .put(companyController.updateOne)
  .delete(companyController.removeOne)

router
  .route('/offer/:id')
  .get(offerController.getOne)
  .put(offerController.updateOne)
  .delete(offerController.removeOne)

router
  .route('/:id')
  .get(cvProController.getOne)
  .put(cvProController.updateOne)
  .delete(cvProController.removeOne)

router
  .route('/recruiter/:id')
  .get(recruiterController.getOne)
  .put(recruiterController.updateOne)
  .delete(recruiterController.removeOne)

router
  .route('/user/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.removeOne)

router
  .route('/school/:id')
  .get(schoolController.getOne)
  .put(schoolController.updateOne)
  .delete(schoolController.removeOne)

export default router