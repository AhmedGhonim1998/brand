import React from 'react'
import { Container, Button, Row, Col, Card, Spinner, Form, InputGroup } from 'react-bootstrap';
export default function FirstFooter() {
    return (
        <>
            <section className='newSletter mt-5'>
                <div className="sletterContainer d-flex flex-column justify-content-center align-items-center py-5">
                    <h3 className='text-center'>Subscribe on our newsletter</h3>
                    <p className='text-center'>Get daily news on upcoming offers from many suppliers all over the world</p>
                    <div className="inputContainer d-flex justify-content-center align-items-center">
                        <InputGroup className="">
                            <Form.Control
                                placeholder="Email"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <Button variant='primary' className='btnProfile ms-2'>subscribe</Button>
                    </div>
                </div>
            </section>
        </>
    )
}
