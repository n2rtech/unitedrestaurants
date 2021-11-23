import React, { Fragment, useState } from 'react';
import ImageUploader from 'react-images-upload';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import {SelectSingleImageUpload,MultipleImageUpload} from '../../../constant'

const VendorPhotogallery = () => {

    const [image, setimage] = useState({ pictures: [] })

    const onDrop = (pictureFiles, pictureDataURLs) => {
        setimage({
            ...image, pictureFiles
        });
    }
    return (
        <Fragment>
            <Breadcrumb parent="Vendor" title="Photo Gallery" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Images in Gallery"}</h5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                    <Col sm="3">
                                        <div className="imgGallery">
                                            <img className="img-thumbnail" src={`${process.env.PUBLIC_URL}/../../../assets/images/resturent/2.jpg`} />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>{"Upload Images"}</h5>
                            </CardHeader>
                            <CardBody>
                                <ImageUploader
                                    withIcon={false}
                                    withPreview={true}
                                    label=""
                                    buttonText="Upload"
                                    onChange={onDrop}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                    maxFileSize={1048576}
                                    fileSizeError=" file size is too big"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default VendorPhotogallery;