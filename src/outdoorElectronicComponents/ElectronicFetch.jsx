import React from 'react'
import { Col, Card, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
export default function ElectronicFetch() {
    const [furniture, setfurniture] = useState([]);

    let getfurniture = () => {
        fetch("./jsonFiles/furniture_pro.json")
            .then(res => res.json())
            .then(data => setfurniture(data))
    }
    useEffect(() => {
        getfurniture()
    }, [])
    return (
        <>
            {furniture.length > 0 ?
                furniture.map(furniture =>
                    <Col key={furniture.id} className='offerCol' lg={3} md={6} sm={12}>
                        <Card className='p-0 offerCard'>
                            <Card.Body>
                                <div className="CardData d-flex justify-content-between">
                                    <div className="heads">
                                        <Card.Title className='fs-6'>{furniture.title}</Card.Title>
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
        </>
    )
}
