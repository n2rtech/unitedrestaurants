const express = require('express');
const router = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const VideoGallery = require('../models').VideoGallery;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

// Create a new Video Gallery
router.post('/', (req, res) => {
        if (!req.body.video_name || !req.body.youtube_link) {
            res.status(400).send({
                msg: 'Please pass Video Gallery name or description.'
            })
        } else {
            VideoGallery
                .create({
                    video_name: req.body.video_name,
                    user_id: req.body.user_id,
                    youtube_link: req.body.youtube_link
                })
                .then((videogallery) => res.status(201).send(videogallery))
                .catch((error) => {
                    console.log(error);
                    res.status(400).send(error);
                });
        }
});



// Get List of Video Gallery
router.get('/', passport.authenticate('vendor', {
    session: false
}), function (req, res) {
    VideoGallery
    .findAll({where:{user_id:req.user.id}})
    .then((videogalleries) => res.status(200).send(videogalleries))
    .catch((error) => {
        res.status(400).send(error);
    });
});


router.get('/list/:id', (req, res) => {
    VideoGallery
    .findAll({where:{user_id:req.params.id}})
    .then((videogalleries) => res.status(200).send(videogalleries))
    .catch((error) => {
        res.status(400).send(error);
    });
});


// Get Video Gallery by ID
router.get('/:id', (req, res) => {
    VideoGallery
        .findByPk(
            req.params.id
        )
        .then((videogallery) => res.status(200).send(videogallery))
        .catch((error) => {
            res.status(400).send(error);
        });
});

// Update a Video Gallery
router.put('/:id', function (req, res) {
        if (!req.params.id || !req.body.video_name || !req.body.youtube_link) {
            res.status(400).send({
                msg: 'Please pass Video Gallery ID, name or description.'
            })
        } else {
            VideoGallery
                .findByPk(req.params.id)
                .then((videogallery) => {
                    VideoGallery.update({
                        video_name: req.body.video_name || videogallery.video_name,
                        user_id: req.body.user_id || videogallery.user_id,
                        youtube_link: req.body.youtube_link || videogallery.youtube_link
                    }, {
                        where: {
                            id: req.params.id
                        }
                    }).then(_ => {
                        res.status(200).send({
                            'message': 'Video Gallery updated'
                        });
                    }).catch(err => res.status(400).send(err));
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});

// Delete a Video Gallery
router.delete('/:id', (req, res) => {
        if (!req.params.id) {
            res.status(400).send({
                msg: 'Please pass videogallery ID.'
            })
        } else {
            VideoGallery
                .findByPk(req.params.id)
                .then((videogallery) => {
                    if (videogallery) {
                        VideoGallery.destroy({
                            where: {
                                id: req.params.id
                            }
                        }).then(_ => {
                            res.status(200).send({
                                'message': 'Video Gallery deleted'
                            });
                        }).catch(err => res.status(400).send(err));
                    } else {
                        res.status(404).send({
                            'message': 'Video Gallery not found'
                        });
                    }
                })
                .catch((error) => {
                    res.status(400).send(error);
                });
        }
});


module.exports = router;
