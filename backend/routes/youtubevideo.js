const express = require('express');
const router = express.Router();
const passport = require('passport');
const Youtubevideo = require('../models').Youtubevideo;
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const store = require('store')
const Youtube = require("youtube-api")
    , fs = require("fs")
    , readJson = require("r-json")
    , opn = require("open")
    ;
// Handle oauth2 callback
const path = require('path');
var multer  = require('multer');
const { title } = require('process');

const imageStorage = multer.diskStorage({
  destination: 'uploads/youtubevideo', 
  
    filename: (req, file, cb) => {
      var image_na = file.originalname.substr(0,file.originalname.indexOf('.'))
           + path.extname(file.originalname);
        cb(null, image_na);
        Youtubevideo.create({video_link:image_na,user_id:req.body.user_id,title:req.body.video_name,description:req.body.desc})
        .then(result => {
          
          const video_path = path.dirname(require.main.filename || process.mainModule.filename)+'/uploads/youtubevideo/'+image_na;
          console.log('video_path' , video_path);
          console.log("Before run sample function..............");
          if(runSample(req.body.video_name,req.body.desc,video_path,result.id)) {
            console.log("After run sample function..............");
            return true;
          } 
        });
  }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 9000000000000000
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(flv|mp4)$/)) { 
         return cb(new Error('Please upload a video file'))
       }
     cb(undefined, true)
  }
}) 

router.post('/oauth2callback', (req, res) => {

  console.log('Title' , store.get('youtube').title);
  console.log('Desc' , store.get('youtube').desc);
  console.log('filename' , store.get('youtube').filename);
  console.log('youtube_id' , store.get('youtube').youtube_id);
      
  console.log("Trying to get the token using the following code: " + req.body.code);
  const CREDENTIALS = readJson(`client_secret.json`);    
  let oauth = Youtube.authenticate({
    type: "oauth"
  , client_id: CREDENTIALS.web.client_id
  , client_secret: CREDENTIALS.web.client_secret
  , redirect_url: CREDENTIALS.web.redirect_uris[0]
  });

  oauth.getToken(req.body.code, (err, tokens) => {

    if (err) {
        return console.log(err);
    } else {
                
    console.log("Got the tokens." , tokens);

    oauth.setCredentials(tokens);

    console.log("The video is being uploaded. Check out the logs in the terminal.");

    Youtube.videos.insert({
        resource: {
            // Video title and description
            snippet: {
                title: store.get('youtube').title
              , description: store.get('youtube').desc
            }
            // I don't want to spam my subscribers
          , status: {
                privacyStatus: "private"
            }
        }
        // This is for the callback function
      , part: "snippet,status"
        // store.get('youtube').filename
        // Create the readable stream to upload the video
      , media: {
            body: fs.createReadStream(store.get('youtube').filename)
        }
    }, (err, data) => {
        
      if(err) {
        console.log("Error while uploading video is" , err);
        res.status(500).send({
          msg:err
      })
      } else {
        console.log("Video is uploaded successfully...", data);
        Youtubevideo.update({
          youtube_video_id: data.data.id,
      }, {
          where: {
              id: store.get('youtube').youtube_id
          }
      }).then(_ => {
          res.status(200).send({
              'message': 'Successfully Updated'
          });
      }).catch(err => res.status(400).send(err));
      }
    });
  }

});

});

router.post('/', imageUpload.array('image',12),  function (req, res) {
  //console.log("Inserted");
  if (!req.body.video_name && !req.body.desc) {
      res.status(400).send({
          msg: 'Please upload files or fill title and description.'
      })
  } else {
    res.status(200).send({
      msg: 'Successfully Added.'
  })
  }
});

// very basic example of uploading a video to youtube
function runSample(title,desc,fileName , youtube_id) {
  console.log("Inside run sample funciton..............");
  store.set('youtube', { title: title , desc: desc , filename: fileName , youtube_id: youtube_id })

  const CREDENTIALS = readJson(`client_secret.json`);    
  console.log("Credentials..............", CREDENTIALS);
  let oauth = Youtube.authenticate({
    type: "oauth"
  , client_id: CREDENTIALS.web.client_id
  , client_secret: CREDENTIALS.web.client_secret
  , redirect_url: CREDENTIALS.web.redirect_uris[0]
  });
  console.log("second step..............");
  await opn(oauth.generateAuthUrl({
    access_type: "offline"
  , scope: ["https://www.googleapis.com/auth/youtube.upload"]
  }) , {wait: true});
  console.log("3rd step..............");
}

router.get('/:id', function (req, res) {
  Youtubevideo
  .findAll({where:{user_id:req.params.id}})
  .then((videos) => res.status(200).send(videos))
  .catch((error) => {
      res.status(400).send(error);
  });
});


module.exports = router;
