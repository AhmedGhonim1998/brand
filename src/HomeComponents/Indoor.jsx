import React from 'react'
import { Container, Nav, Navbar, Button, Dropdown, DropdownButton, Row, Col, Card ,Spinner} from 'react-bootstrap';
import { FaLanguage } from "react-icons/fa";
import { useTranslation } from "react-i18next"
import { NavLink } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { FaMessage, FaHeart } from "react-icons/fa6";
import logo from "../assets/logo.jpeg";
import logoImg from "/logoImg/logo.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import CountryFlag from 'react-country-flag';
import { useState, useEffect } from 'react';
import Outelectronic from '../outdoorElectronicComponents/Outelectronic';
import Gadgets from '../outdoorElectronicComponents/Gadgets';
export default function Indoor() {
    return (
        <>
            <Outelectronic classNamecol="indoorBackground"  cardTitle="home and outdoor"/>
            <Gadgets classNamecol="getgetsBackground" cardTitle="consumer electronics and gadgets"/>
        </>
    )
}
