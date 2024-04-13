import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { Container, Row, Spinner, Col, Form, Dropdown, DropdownButton, Card, Button, Pagination } from "react-bootstrap"
import ProductCard from "../components/ProductCard";
import ProjectNavBar from "../layout/ProjectNavBar";
import { RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function Products() {
    const [products, setProducts] = useState([])
    let { t } = useTranslation();

    let getProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => setProducts(res))
    }

    useEffect(() => {
        getProducts()
    }, [])

    let scrollUp = () => {
        window.scroll(0, 0);
    }
    return (
        <div>
            <ProjectNavBar />

            <Container>
                <div className="items mt-3">
                    <Row>
                        <Col lg={9} md={12} sm={12} className="my-auto">
                            <p className="mb-0">12,911 items in <span className="font-weight-bold">Mobile accessory</span></p>
                        </Col>
                        <Col lg={3} md={12} sm={12}>
                            <Row>
                                <Col sm={6} className="my-auto">
                                    <Form.Check aria-label="option 1" label='Verified only' />
                                </Col>
                                <Col sm={6}>
                                    <DropdownButton
                                        align="end"
                                        title="Featured"
                                        id="dropdown-menu-align-end"
                                        className='SecDropMenu nav-link mb-1'
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
                    </Row>
                </div>

                <div className="productItems">
                    <Row className="mt-4">
                        {products.length > 0 ?
                            products.map(products =>
                                <Col key={products.id} className='productsCol mb-3' lg={4} md={12} sm={12}>
                                    <Card className="productsCard h-100">
                                        <div className="productImgContent">
                                            <Card.Img variant="top" src={products.image} className="productImage mt-3" />
                                        </div>
                                        <Card.Body>
                                            <p className="mt-3 mb-2">{products.price} $</p>
                                            <div className="stars d-flex justify-content-start mb-2 mt-0">
                                                <RiStarSFill className="checked" />
                                                <RiStarSFill className="checked" />
                                                <RiStarSFill className="checked" />
                                                <RiStarSFill className="checked" />
                                                <RiStarSFill className="unChecked" />
                                            </div>
                                            <Card.Title>{products.title}</Card.Title>
                                            <Card.Text>
                                                {products.desc}
                                            </Card.Text>
                                            <Link to={`/products/single_product/${products.id}`} onClick={scrollUp}>
                                                <Button variant="secondary" className="secBtn productBtn">view details</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            :
                            <Spinner animation="grow" className="m-auto" />
                        }
                    </Row>
                    <Pagination className="d-flex flex=column justify-content-center mt-4">
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>

                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item >{4}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </Container>
        </div>
    )
}

