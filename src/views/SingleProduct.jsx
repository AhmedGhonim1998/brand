import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Spinner, Col, Card, Row, CardGroup, Container, Table, Button, Nav, Tab, Tabs } from "react-bootstrap"
import { RiStarSFill } from 'react-icons/ri';
import ProjectNavBar from "../layout/ProjectNavBar";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { RiSpaceShipLine } from "react-icons/ri";
import TableData from "../helpers/TableData";
import RImage from "../assets/RImage.png";
import CountryFlag from 'react-country-flag';
import { MdOutlineSecurity } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import SingleProductDes from "../helpers/SingleProductDes";
import RelatedProducts from "../helpers/RelatedProducts";
import shopNow from "../assets/BackGroundShop/shopNow.png"
export default function SingleProduct() {
    const { id } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getSingleProduct = async () => {
        try {
            const response = await fetch(`http://localhost:3000/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            else {
                const data = await response.json();
                setSingleProduct(data);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {

        getSingleProduct();
    }, [id]);
    return (
        <>
            <ProjectNavBar />
            <Container>
                {isLoading ? (
                    <Spinner animation="grow" className="m-auto" />
                ) : (
                    <>
                        <Card className="productsCard mt-3">
                            <Row className="singleCardRow pt-4 pb-4">
                                <Col className="singleCardCol" lg={4} mb={12} sm={12}>
                                    <div className="productImgContent me-auto ms-5 singleProductImg mt-4 mb-2">
                                        <Card.Img variant="top" src={singleProduct.image} className="productImage mt-3 singleImg" />
                                    </div>
                                </Col>

                                <Col className="singleCardCol my-auto" lg={4} mb={12} sm={12}>
                                    <div className="rightIcon d-flex justify-content-start">
                                        <AiOutlineCheck className="rightIcon" />
                                        <p className="text-capitalize my-auto stock">in stock</p>
                                    </div>
                                    <Card.Title className="text-start ms-2">{singleProduct.title}</Card.Title>

                                    <div className="starRaring d-flex justify-content-start">


                                        <RiStarSFill className="checked singleStar mt-1" />
                                        <RiStarSFill className="checked singleStar mt-1" />
                                        <RiStarSFill className="checked singleStar mt-1" />
                                        <RiStarSFill className="checked singleStar mt-1" />
                                        <RiStarSFill className="unChecked singleStar mt-1" />
                                        <p className="ms-2 me-3">{singleProduct.rating.rate}</p>

                                        <div className="reviews d-flex justify-content-start me-3">
                                            <MdOutlineReviews />
                                            <p className="mt-1">32 reviews</p>
                                        </div>
                                        <div className="reviews d-flex justify-content-start me-3">
                                            <RiSpaceShipLine />
                                            <p className="mt-1">154 solid</p>
                                        </div>
                                    </div>
                                    <CardGroup className="">

                                        <Card className="singlePrices priceCard">
                                            <Card.Body>
                                                <Card.Title className="priceText text-center">$ {singleProduct.price}</Card.Title>
                                                <Card.Text className="text-center">
                                                    50-100 pcs
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                            <Card className="singlePrices priceCard">
                                                <Card.Body>
                                                    <Card.Title className="text-center">$ 90.00</Card.Title>
                                                    <Card.Text className="text-center">
                                                        100pcs
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Card>
                                        <Card>
                                            <Card className="singlePrices">
                                                <Card.Body>
                                                    <Card.Title className="text-center">$ 78.00</Card.Title>
                                                    <Card.Text className="text-center">
                                                        700+ pcs
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Card>
                                    </CardGroup>

                                    <TableData />

                                </Col>
                                <Col className="singleCardCol" lg={4} mb={12} sm={12}>
                                    <div className='electronicProfile mt-2 '>
                                        <div className="electronicContent py-3 px-2 Querycontent">
                                            <div className="electronicImage d-flex justify-content-start">
                                                <img src={RImage} alt="img" className='imageProfile' />
                                                <p className='text-capitalize my-auto ms-2 supplierText'>Supplier Guanjoi Trading LLC</p>
                                            </div>
                                            <hr />
                                            <div className="list">
                                                <ul className="list-unstyled">
                                                    <li><CountryFlag countryCode="DE" svg className='my-auto me-2 security' />Germany, Berlin</li>
                                                    <li><MdOutlineSecurity className="security me-2" />Verified Seller</li>
                                                    <li><TfiWorld className="security me-2" />Worldwide shipping</li>
                                                </ul>
                                            </div>
                                            <div className="profileButtons d-flex flex-column justify-content-center mx-auto">
                                                <Button variant='primary' className='btnProfile mx-auto mt-2'>send inquiry</Button>
                                                <Button variant='secondary' className='secBtn btnProfile mx-auto mt-2'>seller’s profile</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                        <Card className="mt-3 description">
                            <Card.Body>
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Reviews">
                                        Tab content for Profile
                                    </Tab>
                                    <Tab eventKey="profile" title="Description">

                                        <SingleProductDes par={singleProduct.description} />
                                    </Tab>
                                    <Tab eventKey="contact" title="Shipping" disabled>
                                        Tab content for Contact
                                    </Tab>
                                    <Tab eventKey="contact" title="About Seller" disabled>
                                        Tab content for Contact
                                    </Tab>
                                </Tabs>
                                {/* {singledesc ? <SingleProductDes par={singleProduct.description} /> : ''} */}
                            </Card.Body>

                        </Card>

                        <Card className="mt-3 description mb-3">
                            <Card.Body>
                                <h3 className="text-capitalize text-start">realted products</h3>
                                <Row className="relatedRows">
                                    <RelatedProducts />
                                </Row>
                            </Card.Body>
                        </Card>
                        <div className="superDiscountSection">
                            <div className="superdiscountContainer p-4">
                                <div className="d-flex justify-content-between SuperDicsountFlex">
                                    <div>
                                        <h3 className="text-white text-start">Super discount on more than 100 USD</h3>
                                        <p className="text-white">Have you ever finally just write dummy info</p>
                                    </div>

                                    <div className="my-auto">

                                        <Button variant="primary" className="shopNowBtn text-capitalize">shop now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>


                )}
            </Container>

        </>
    );
}