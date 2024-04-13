import React from 'react'
import { Spinner, Col, Card, Row, CardGroup, Container, Table } from "react-bootstrap"
export default function TableData() {
    return (
        <>
            <Table size="sm" className="mt-3">
                <thead>
                    <tr>
                        <th>price</th>
                        <td>Negotiable</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Type:</th>
                        <td>Classic shoes</td>
                    </tr>
                    <tr>
                        <th>Materail:</th>
                        <td>Plastic material</td>
                    </tr>
                    <tr>
                        <th>Design:</th>
                        <td>Modern Nice</td>
                    </tr>

                    <tr>
                        <th>Customization:</th>
                        <td>Customized logo and design custom packages</td>
                    </tr>

                    <tr>
                        <th>Protection: </th>
                        <td>Refund Policy</td>
                    </tr>

                    <tr>
                        <th>Warranty:</th>
                        <td>2 years full warranty </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}
