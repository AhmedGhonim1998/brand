import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Spinner, Col, Form, Dropdown, DropdownButton, Card, Button, Pagination } from "react-bootstrap"
export default function EditProduct() {

    let navigate = useNavigate()

    const [product, setProduct] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    const params = useParams()

    console.log(params.id)

    let getProduct = () => {
        fetch("http://localhost:3000/products/" + params.id)
            .then(res => res.json())
            .then(res => setProduct(res))
    }

    const handler = (id) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...product, title, description: desc })
        };
        fetch('http://localhost:3000/products/' + id, requestOptions).then(() => navigate("/products"))
    }

    let handleData = (ev) => {
        ev.target.name === "title"
            ?
            setTitle(ev.target.value)
            :
            setDesc(ev.target.value)
    }

    useEffect(() => {
        getProduct()
    }, [])

    console.log(product)

    return (
        <div>
            <Card className="productsCard h-100 w-75 mx-auto">
                <div className="text-center">
                <h2>{product.title}</h2>
                <img src={product.image} width={200} />
                <p className="w-75 mx-auto">{product.description}</p>
                </div>
            </Card>

            <hr />
            <div className="w-50 m-4 mx-auto text-center">
                <input
                    className="form-control mb-2"
                    name="title"
                    onChange={handleData}
                />
                <textarea
                    className="form-control"
                    onChange={handleData}
                    name="desc"
                >
                </textarea>
                <button className="btn btn-success mt-3" onClick={() => handler(product.id)}>Edit</button>
            </div>
        </div>
    )
}
