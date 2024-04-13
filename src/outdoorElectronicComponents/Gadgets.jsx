import React from 'react'
import { Container, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ElectronicFetch from './ElectronicFetch';
import GadgetsFetch from './GadgetsFetch';
export default function Gadgets({classNamecol , cardTitle }) {

    const [gadgets, setgadgets] = useState([]);

    let getgadgets = () => {
        fetch("./jsonFiles/gadgets.json")
            .then(res => res.json())
            .then(data => setgadgets(data))
    }
    useEffect(() => {
        getgadgets()
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
                                        {gadgets.length > 0 ?
                                            gadgets.map(gadgets =>
                                                <Col key={gadgets.id} className='offerCol' lg={3} md={6} sm={12}>
                                                    <Card className='p-0 offerCard'>
                                                        <Card.Body>
                                                            <div className="CardData d-flex justify-content-between">
                                                                <div className="heads">
                                                                    <Card.Title >{gadgets.title}</Card.Title>
                                                                    <Card.Subtitle className="mb-2 text-muted">{gadgets.subTitle}</Card.Subtitle>
                                                                </div>
                                                                <div className="imageFur">
                                                                <Card.Img variant="top" src={gadgets.image} className='furnitureImg mb-auto' />
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
                                        <GadgetsFetch/>
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
