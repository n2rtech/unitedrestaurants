import React,{useState,useMemo,Fragment} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { Player, ControlBar } from 'video-react';

export default function BusinessVideo() {

  const params = useParams();
  const id = `${params.id}`;

  const[videoGalleryData,setVideoGalleryData] = useState([])
  const[uploadvideoGalleryData,setUploadVideoGalleryData] = useState([])

  useMemo(() => {

    axios.get(`/api/video-gallery/list/${id}`)
    .then((result_data) => {
      const result = result_data.data;
      console.log(result);
      setVideoGalleryData(result.youtube_gallery);
      setUploadVideoGalleryData(result.uploadvideo)
    });

  },[])

  return (
    <>
    {(videoGalleryData && videoGalleryData.length) ?
      <div className="details-left">
        <div className="menu-items offers">
          <h5>Videos</h5>
          { videoGalleryData !== '' ? videoGalleryData.map((videoGallery , i ) => (
              <div key={i} className="videodiv">
                <div className="embed-responsive embed-responsive-16by9">


          <Player>
          <source src={videoGallery.youtube_link.replace('watch?v=' , 'embed/')}  />
          <ControlBar autoHide={false} />
        </Player>
            </div>
              </div>
            )) : <span style={{color:'red'}}> Not Available </span> }  

            &nbsp;

            { uploadvideoGalleryData !== '' ? uploadvideoGalleryData.map((uploadvideoGallery , i ) => (
              <div key={i} className="videodiv">
        <Player>
          <source src={`${process.env.PUBLIC_URL}/api/uploads/youtubevideo/${uploadvideoGallery.video_link}`} />
          <ControlBar autoHide={false} />
        </Player>
               
              </div>
            )) : <span style={{color:'red'}}> Not Available </span> }       

        </div>
      </div>
      : '' }

    </>
  );
}

/*<iframe width="100%" height="260" src="https://www.youtube.com/embed/SXJqEnauNaY?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/


