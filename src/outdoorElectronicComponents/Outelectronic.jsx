import React from 'react'
import { Container, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ElectronicFetch from './ElectronicFetch';
export default function Outelectronic({ classNamecol, cardTitle }) {
    const [furniture, setfurniture] = useState([]);

    let getfurniture = () => {
        fetch("./jsonFiles/furniture.json")
            .then(res => res.json())
            .then(data => setfurniture(data))
    }
    useEffect(() => {
        getfurniture()
    }, [])
    return (
        <>
            <section className='indoor mt-4'>
                <div className="indoorContainer offersContainer">
                    <Container className='offersDealsContiner'>
                        <div className="sourceNowContainer">
                            <div className="rowContainer d-flex justify-content-start">
                                <Row className='me-2'>
                                    <Col sm={12} className={classNamecol}>
                                        <Card className='cardIndoor'>
                                            <Card.Body className='text-start p-0 pt-3'>
                                                <Card.Title className='text-start w-50 text-capitalize'>{cardTitle}</Card.Title>
                                                <div className="indoorBtn ms-auto">
                                                    <Button variant='secondary' className='secBtn btnProfile mx-auto mt-2'>source now</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>


                                <div className="contentbes d-flex flex-column justify-content-start">
                                    <Row className='bg-white'>
                                        {furniture.length > 0 ?
                                            furniture.map(furniture =>
                                                <Col key={furniture.id} className='offerCol' lg={3} md={6} sm={12}>
                                                    <Card className='p-0 offerCard'>
                                                        <Card.Body>
                                                            <div className="CardData d-flex justify-content-between">
                                                                <div className="heads">
                                                                    <Card.Title>{furniture.title}</Card.Title>
                                                                    <Card.Subtitle className="mb-2 text-muted">{furniture.subTitle}</Card.Subtitle>
                                                                </div>
                                                                <div className="imageFur">
                                                                <Card.Img variant="top" src={furniture.image} className='furnitureImg mb-auto' />
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            )
                                            :
                                            <Spinner animation="grow" className="m-auto" />
                                        }
                                    </Row>
                                    <hr className='m-0'/>
                                    <Row>
                                        <ElectronicFetch/>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
