import React, { useState } from 'react'
import { Spinner, Col, Card, Row, CardGroup, Container, Table, Button, Nav } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";



const correct =['Some great feature name here','Lorem ipsum dolor sit amet, consectetur','Duis aute irure dolor in reprehenderit','Some great feature name here']
export default function SingleProductDes({ par }) {
    const sign = correct.map(item=>(<li><FaCheck className='me-2 security'/>{item}
    </li>))
    return (
        <>
            <div className="descritionContainer">
                <p className='mb-3 mt-3'>{par}</p>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Model</th>
                            <td>#8786867</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <th>Style</th>
                            <td>#Classic style</td>
                        </tr>
                        <tr>

                            <th>Certificate</th>
                            <td>ISO-898921212</td>
                        </tr>
                        <tr>

                            <th>Size</th>
                            <td>ISO-898921212</td>
                        </tr>
                        <tr>

                            <th>Memory</th>
                            <td>36GB RAM</td>
                        </tr>
                    </tbody>
                </Table>

                <div className="checkIconList">
                    <ul className='list-unstyled'>
                        {sign}
                    </ul>
                </div>
            </div>
        </>
    )
}
