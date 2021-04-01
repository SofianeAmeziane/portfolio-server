
const express = require('express');
const router = express.Router();
const {getportfolios,getportfolioById,createportfolio} = require('../controllers/portfolios');
const { checkJwt } = require('../controllers/auth');
router.get('',getportfolios );
router.get('/:id',getportfolioById);
router.post('',checkJwt, createportfolio);

  module.exports = router;