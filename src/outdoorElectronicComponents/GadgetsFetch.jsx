import React from 'react'
import { Col, Card, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
export default function GadgetsFetch() {
    const [gadgets, setgadgets] = useState([]);

    let getgadgets = () => {
        fetch("./jsonFiles/gadgets_pro.json")
            .then(res => res.json())
            .then(data => setgadgets(data))
    }
    useEffect(() => {
        getgadgets()
    }, [])
    return (
        <>
             {gadgets.length > 0 ?
                gadgets.map(gadgets =>
                    <Col key={gadgets.id} className='offerCol' lg={3} md={6} sm={12}>
                        <Card className='p-0 offerCard'>
                            <Card.Body>
                                <div className="CardData d-flex justify-content-between">
                                    <div className="heads">
                                        <Card.Title className='fs-6'>{gadgets.title}</Card.Title>
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
        </>
    )
}
