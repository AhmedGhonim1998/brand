import React from 'react'
import { Container, Button, Row, Col, Card, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
export default function RecommendedItems() {
    const [recomend, setrecomend] = useState([]);

    let getrecomend = () => {
        fetch("./jsonFiles/recommend.json")
            .then(res => res.json())
            .then(data => setrecomend(data))
    }
    useEffect(() => {
        getrecomend()
    }, [])
    return (
        <>
        <Container>
            <h3 className='text-start text-black mt-5'>Recomended items</h3>
            <Row className='row-cols-lg-5 row-cols-md-2 row-cols-sm-1 mt-3' xs={1}>
                {recomend.length > 0 ?
                    recomend.map(recomend =>
                        <Col key={recomend.id} className=''>
                            <Card className='recCard mb-4'>
                                <div className="recomendImg mx-auto w-75">
                                    <Card.Img variant="top" src={recomend.image} className='mx-auto mt-3 recImg' />
                                </div>
                                <Card.Body>
                                    <Card.Title className='text-center'>{recomend.price}</Card.Title>

                                    <div className="mx-auto text-center">
                                        <p className='text-center mb-0 recomendPar'>{recomend.des}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                    :
                    <Spinner animation="grow" className="m-auto" />
                }
            </Row>

        </Container>
        </>
    )
}
