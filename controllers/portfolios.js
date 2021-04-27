const mongoose = require('mongoose');
const Portfolio = mongoose.model('Portfolio');
exports.getportfolios = async (req,res) => {
  const portfolios = await Portfolio.find({});
    return res.json(portfolios);
    }
exports.getportfolioById = async (req,res) => {
        try {
          const portfolio = await Portfolio.findById(req.params.id)
          return res.json(portfolio);
        } catch (error) {
          return res.status(422).send(error.message);
        }
      }
exports.createportfolio = async (req,res)=> {
  const portfolioData = req.body;
  const userId = req.user.sub;
  const portfolio = new Portfolio(portfolioData);
  portfolio.userId = userId;

  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}

exports.updateportfolio = async (req,res) => {
  const {body,params: {id}} = req;
  try {
    const updatedportfolio = await Portfolio.findByIdAndUpdate({_id : id},body,{new:true, runValidators:true})
    return res.json(updatedportfolio);
  } catch(error) { 
    return res.status(422).send(error.message);
  }
}

exports.deleteportfolio = async (req,res) => {
  const {params: {id}} = req;
  try {
    const deletedportfolio = await Portfolio.findOneAndRemove({_id : id})
    return res.json(deletedportfolio);
  } catch(error) {
    return res.status(422).send(error.message);
  }
}
