
const express = require('express');
const router = express.Router();
const {getportfolios,getportfolioById,createportfolio,updateportfolio, deleteportfolio} = require('../controllers/portfolios');
const { checkJwt, checkRole } = require('../controllers/auth');
router.get('', getportfolios );
router.get('/:id', getportfolioById);
router.post('', checkJwt, createportfolio);
router.patch('/:id', checkJwt, checkRole('admin'), updateportfolio);
router.delete('/:id', checkJwt, checkRole('admin'), deleteportfolio);
  module.exports = router;