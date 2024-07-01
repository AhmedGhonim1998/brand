import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { json } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
export default function Chart({ chart, setChart }) {
    const handleRemove = (id) => {
        const arr = chart.filter((item) => item.id !== id);
        setChart(arr);
    };
    return (
        <article>
            <Container>
                <Row>
                    {chart.map((item) => (
                        <Col lg={4} md={6} sm={12} className="mb-3" key={item.id}>
                            <Card className="productsCard h-100">
                                <div className="productImgContent mb-3">
                                    <Card.Img variant="top" src={item.image} className="productImage mt-3" />
                                </div>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <div className="mt-3">
                                        <span className="me-2">{item.price}</span>
                                        <FaTrashAlt onClick={() => handleRemove(item.id)} style={{color:'#f00' , cursor:"pointer" , width:'15%'}}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </article>
    );
}
