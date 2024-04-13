import React, { useEffect, useState } from "react";
import { Spinner, Col, Card, Row, Button } from "react-bootstrap";
import watch from '/electronicImgs/electronicWatch.png';
import camera from "/electronicImgs/electronicCamera.png";
import headPhone from "/electronicImgs/electronicHeadPhone.png"
import catele from "/electronicImgs/catele.png";
const related = [

    {
        id: 1,
        image: watch,
        title: "smart watches",
        subTitle: "From USD 100"
    },
    {
        id: 2,
        image: camera,
        title: "cameras",
        subTitle: "From USD 39"
    },
    {
        id: 3,
        image: headPhone,
        title: "head phones",
        subTitle: "From USD 19"
    },
    {
        id: 4,
        image: catele,
        title: "electronic kattle",
        subTitle: "From USD 10"
    }
]
export default function RelatedProducts() {
    return (
        <>
            {related.map(items => (

                <Col lg={3} md={6} sm={12} className="relatedCard">
                    <Card className="relatedCard">
                        <div className="relatedProductsContent mx-auto">
                            <Card.Img variant="top" src={items.image} className="relatedProductsImg my-auto mx-auto" />
                        </div>
                        <Card.Body>
                            <Card.Title className="text-center">{items.title}</Card.Title>
                            <Card.Text className="text-center">
                                {items.subTitle}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
        </>
    )
}
