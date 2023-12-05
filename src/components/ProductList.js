import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "List of Current Products";
        fetch('https://dummyjson.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => {
                // console.error('Error fetching data:', error);
                setError('Failed to load products');
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1 className="text-center my-4">Product List</h1>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
