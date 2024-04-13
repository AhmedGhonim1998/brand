import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import CountryFlag from 'react-country-flag';
import { GiHamburgerMenu } from "react-icons/gi";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { SideNavData } from '../HomeComponents/SideNavData';
export default function SecNavBar() {

    const [sidebar, setSidebar] = useState(false);
    function sidebarHandler() {
        setSidebar(!sidebar);
    }

    var { t, i18n } = useTranslation()

    console.log(i18n)

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <>
            <hr className='m-0' />
            <section className='secNav'>
                <div className="secNavContainer container">
                    <Row className='SecNavRow'>
                        <Col className='SecNavCol' lg={6} md={12} sm={12}>
                            <Row className='menuRow'>
                                <Col lg={2} md={4} sm={4}>
                                    <Row>
                                        <Col sm={4} className='p-0'>
                                        <GiHamburgerMenu className='mnu' onClick={sidebarHandler} />
                                        </Col>
                                        <Col sm={8} className='p-0 my-auto'>
                                        <p className='text-capitalize my-auto ms-1'>category</p>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={2} md={12} sm={12} className='coloff'>
                                    <NavLink className='nav-link text-capitalize mt-1'>hot offers</NavLink>
                                </Col>

                                <Col lg={2} md={12} sm={12}>
                                    <NavLink className='nav-link text-capitalize mt-1'>gift boxes</NavLink>
                                </Col>

                                <Col lg={2} md={12} sm={12}>
                                    <NavLink className='nav-link text-capitalize mt-1' to='/products'>products</NavLink>
                                </Col>

                                <Col lg={2} md={12} sm={12}>
                                    <NavLink className='nav-link text-capitalize mt-1' to="/">home</NavLink>
                                </Col>

                                <Col lg={2} md={12} sm={12}>
                                    <DropdownButton
                                        align="end"
                                        title="Help"
                                        id="dropdown-menu-align-end"
                                        className='SecDropMenu nav-link'
                                    >

                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='SecNavCol' lg={6} md={12} sm={12}>
                            <div className='germanyContainer'>
                                <div className="d-flex justify-content-end menusIcons">
                                    <DropdownButton
                                        align="end"
                                        title="English,USD"
                                        id="dropdown-menu-align-end"
                                        className='SecDropMenu'
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </DropdownButton>
                                    <div className="flag d-flex justify-content-arround">
                                        <DropdownButton
                                            align="end"
                                            title="Ship To"
                                            id="dropdown-menu-align-end"
                                            className='SecDropMenu'
                                        >

                                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                        </DropdownButton>
                                        <CountryFlag countryCode="DE" svg className='my-auto' />
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <nav className={sidebar ? 'sideMenu active' : 'sideMenu'}>
                    <ul className='sideMenuItems'>
                        <li className='sideMenuToggle list-unstyled mb-4 mt-3' onClick={sidebarHandler}>
                            <Link to='#' className='sideBars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SideNavData.map((item, index) => 
                            (
                                <li key={index} className={item.cName}>
                                    <Link>
                                        <span className='title'>{item.title}</span>
                                    </Link>
                                    <hr className='me-3'/>
                                </li>
                            )
                            
                        )}
                    </ul>
                </nav>
            </section>
            <hr className='mt-0' />
        </>
    )
}
