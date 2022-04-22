import React,{useState,useMemo,Fragment} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
export default function BusinessVideo() {

  const params = useParams();
  const id = `${params.id}`;

  const[videoGalleryData,setVideoGalleryData] = useState([])

  useMemo(() => {

    axios.get(`/api/video-gallery/list/${id}`)
    .then((result_data) => {
      const result = result_data.data;
      setVideoGalleryData(result);
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
              <iframe src={videoGallery.youtube_link.replace('watch?v=' , 'embed/')} 
                  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen" 
                  msallowfullscreen="msallowfullscreen" 
                  oallowfullscreen="oallowfullscreen" 
                  webkitallowfullscreen="webkitallowfullscreen"> </iframe>
            </div>
              </div>
            )) : <span style={{color:'red'}}> Not Available </span> }        
        </div>
      </div>
      : '' }
    </>
  );
}

/*<iframe width="100%" height="260" src="https://www.youtube.com/embed/SXJqEnauNaY?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/


