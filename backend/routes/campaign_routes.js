const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const campaignController = require('../controllers/campaign_controller');

router.post('/', auth, isAdmin, campaignController.validateCampaign, campaignController.createCampaign);
router.get('/', campaignController.getCampaigns);
router.patch('/:id', auth, isAdmin, campaignController.validateCampaign, campaignController.updateCampaign);
router.delete('/:id', auth, isAdmin, campaignController.deleteCampaign);

module.exports = router;