import React from 'react';
import './Product.css';
import { Card } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductList = ({ product }) => {
    return (
        <div className="col-md-3 mb-5 mt-10 ">
            <Card class="h-card">
                <Link to="details" style={{textDecorations:"none", color:"inherit"}}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body className="text-center">
                        <Card.Body>
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStar color="cornflowerblue" size="1em" />
                            <FaStarHalfAlt color="cornflowerblue" size="1em" />
                        </Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer className="text-center" style={{background:"#cc7d10b8"}} color="cornflowerblue" size="1em">
                        ${product.price}
                    </Card.Footer>
                </Link>
            </Card>
        </div>
    );
};

export default ProductList;