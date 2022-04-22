import React,{useState,useMemo,Fragment} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function JobOpenings() {

  const params = useParams();
  const id = `${params.id}`;

  const[jobsData,setJobsData] = useState([])

  useMemo(() => {

    axios.get(`/api/jobs/list/${id}`)
    .then((result_data) => {
      setJobsData(result_data.data);
    });

  },[])

  return (
    <>
    {jobsData && jobsData.length ?
      <div className="details-left">
        <div className="menu-items offers">
          <h5>Job Openings</h5>
          <ul className="list-unstyled">
          {jobsData.map((jobs , i ) => (
            <li key={i}><i className="fa fa-check"></i> {jobs.job_name} </li>
            ))}
          </ul>
        </div>
      </div>
      : '' }
    </>
  );
}


