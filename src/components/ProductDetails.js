import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

document.title = "Product Details";

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to load product details');
            });
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} className="img-fluid" />
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            <p><strong>Rating:</strong> {product.rating} / 5</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <div>
                <h3>Images</h3>
                <div className="row">
                    {product.images.map((image, index) => (
                        <div key={index} className="col-sm-12 col-md-4">
                            <img src={image} alt={`Product Image ${index + 1}`} className="img-fluid" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
