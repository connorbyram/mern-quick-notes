const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const note = require('../../models/note');

// POST api/notes
router.post('/', ensureLoggedIn, notesCtrl.create);

// GET api/notes
router.get('/', ensureLoggedIn, notesCtrl.index);

module.exports = router;