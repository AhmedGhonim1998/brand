import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import CheckBox from '../components/CheckBox';
import Range from '../components/Range';
import { LiaStarSolid } from "react-icons/lia";
export const SideNavData = [
  {
    title: <Accordion defaultActiveKey="1" className='accordion'>
      <Accordion.Item eventKey="0" className='allMenu'>
        <Accordion.Header className='listHeader'>category</Accordion.Header>
        <Accordion.Body>
          <ul className='ElectronicItems list-unstyled listData'>

            <li className='mb-2'>
              <Link className='nav-link text-capitalize listData'>
                moblie accessory
              </Link>
            </li>

            <li className='mb-2'>
              <Link className='nav-link text-capitalize listData'>
                electronics
              </Link>
            </li>
            <li className='mb-2'>
              <Link className='nav-link text-capitalize listData'>
                smart phones
              </Link>
            </li>
            <li className='mb-2'>
              <Link className='nav-link text-capitalize listData'>
                modern tech
              </Link>
            </li>
            <li className='listData seeAll'>see all</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>,
    path: '/',
    cName: 'sideBarText'
  },
  {
    title: <Accordion defaultActiveKey="1" className='accordion'>
      <Accordion.Item eventKey="0" className='allMenu'>
        <Accordion.Header className='listHeader text-capitalize'>Brands</Accordion.Header>
        <Accordion.Body className='d-flex justify-content-start flex-column'>
          <CheckBox labelName='samsung' checkType='checkbox'/>
          <CheckBox labelName='apple' checkType='checkbox'/>
          <CheckBox labelName='huawei' checkType='checkbox'/>
          <CheckBox labelName='pocco' checkType='checkbox'/>
          <CheckBox labelName='lenovo'checkType='checkbox'/>
          <Link className='text-capitalize'>see all</Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>,
    cName: 'sideBarText'
  },
  {
    title: <Accordion defaultActiveKey="1" className='accordion'>
      <Accordion.Item eventKey="0" className='allMenu'>
        <Accordion.Header className='listHeader'>features</Accordion.Header>
        <Accordion.Body className='d-flex justify-content-start flex-column'>
          <CheckBox labelName='metallic' checkType='checkbox'/>
          <CheckBox labelName='plastic cover' checkType='checkbox'/>
          <CheckBox labelName='8GB Ram' checkType='checkbox'/>
          <CheckBox labelName='super power' checkType='checkbox'/>
          <CheckBox labelName='large memory' checkType='checkbox'/>
          <Link className='text-capitalize'>see all</Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>,
    cName: 'sideBarText'
  },
  {
    title: <Accordion defaultActiveKey="1" className='accordion'>
      <Accordion.Item eventKey="0" className='allMenu'>
        <Accordion.Header className='listHeader'>price range</Accordion.Header>
        <Accordion.Body>
        <Range/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>,
    icon: <IoIcons.IoMdPeople />,
    cName: 'sideBarText'
  },
  {
    title: <Accordion defaultActiveKey="1" className='accordion'>
      <Accordion.Item eventKey="0" className='allMenu'>
        <Accordion.Header className='listHeader'>condition</Accordion.Header>
        <Accordion.Body className='d-flex justify-content-start flex-column'>
        <CheckBox labelName='any' checkType='radio'/>
          <CheckBox labelName='Refurbished' checkType='radio'/>
          <CheckBox labelName='Brand new' checkType='radio'/>
          <CheckBox labelName='Old items' checkType='radio'/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'sideBarText'
  },
  {
    title: <Accordion defaultActiveKey="1" className='accordion'>
      <Accordion.Item eventKey="0" className='allMenu'>
        <Accordion.Header className='listHeader'>ratings</Accordion.Header>
        <Accordion.Body className='d-flex justify-content-start flex-column'>
          <CheckBox labelName='metallic' checkType='checkbox'/>
          <CheckBox labelName='plastic cover' checkType='checkbox'/>
          <CheckBox labelName='8GB Ram' checkType='checkbox'/>
          <CheckBox labelName='super power' checkType='checkbox'/>
          <CheckBox labelName='large memory' checkType='checkbox'/>
          <Link className='text-capitalize'>see all</Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'sideBarText'
  }
];