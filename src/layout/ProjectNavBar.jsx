import React from 'react'
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
export default function ProjectNavBar() {
    return (
        <>
            <section className='ProjectNavBar'>
                <div className="projectNavConteiner">
                    <Container>
                        <div className="d-flex justify-content-start">
                            <NavLink className='nav-link text-capitalize me-3'>
                                home
                            </NavLink>

                            <NavLink className='nav-link text-capitalize me-3'>
                                clothings
                            </NavLink>

                            <NavLink className='nav-link text-capitalize me-3'>
                                mens wear
                            </NavLink>

                            <NavLink className='nav-link text-capitalize me-3'>
                                sumer clothings
                            </NavLink>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
