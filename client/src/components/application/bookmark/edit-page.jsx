import React, { Fragment, useEffect , useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Card, CardBody,Button } from 'reactstrap'
import CKEditors from "react-ckeditor-component";
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const EditPage = () => {

  const token = localStorage.getItem("token");
  const history = useHistory()
  const [content,setContent] = useState('') 
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        setContent(newContent)
    }

    const params = useParams();
    const [titleData, setTitleData] = useState({});
   useEffect(() => {
    const GetData = async () => {
        const config = {
    headers: {'Authorization': 'JWT '+token }
  };
      const result = await axios('/api/pages/'+`${params.id}`,config);
      setTitleData(result.data);
      setContent(result.data.body);
    };
    GetData();
  }, []);

    const handleSubmit = event => {
      event.preventDefault();
  
      const config = {
        headers: { 'Content-Type': 'application/json'  ,'Access-Control-Allow-Origin': '*' , 'Authorization': 'JWT '+token }
        };
        const bodyParameters = {
          title: titleData.title,
          body: content
        };
        axios.put(`/api/pages/`+`${params.id}`,
          bodyParameters,
          config
        ) .then(response => {
          toast.success("Page Content Updated!")
          setTimeout(() => {
            history.push('/dashboard/admin/manage-pages/');
        }, 1000);
        })
           .catch(error => console.log('Form submit error', error))

           
  
    };

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Edit Page" />
      <Container fluid={true}>
        <Card>
        <CardBody>
          <h4 className="m-b-20">{titleData.title}</h4>
          <CKEditors
              activeclassName="p10"
              content={content}
              events={{
                  "change": onChange
              }}
          />
          <Button color="success" onClick = {handleSubmit} className="m-t-20">{"Save"}</Button>
        </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
}

export default EditPage;