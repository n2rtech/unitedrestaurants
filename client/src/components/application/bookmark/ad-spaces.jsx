import React, { Fragment, useState } from 'react';
import ImageUploader from 'react-images-upload';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap'
import {SelectSingleImageUpload,MultipleImageUpload} from '../../../constant'

const AddSpaces = () => {

    const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }
    return (
        <Fragment>
            <Breadcrumb parent="Vendor" title="Ad Space" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Ad Running on website"}</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm="4">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                        <ImageUploader
                                            withIcon={false}
                                            withPreview={true}
                                            label=""
                                            buttonText="Upload Image"
                                            onChange={onDrop}
                                            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                            maxFileSize={1048576}
                                            fileSizeError=" file size is too big"
                                        />
                                        <div className="text-center">
                                            <Button color="danger" className="btn-pill">Delete Banner</Button>
                                        </div>
                                    </Col> 
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AddSpaces;