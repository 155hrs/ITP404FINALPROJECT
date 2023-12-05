import React, { useState, useEffect } from 'react';
import {ToastContainer, toast} from 'react-toastify';

const InventoryManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProductName, setNewProductName] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        document.title = "Inventory Management Page for Inventory Manipulation";
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => setError(error.message));
    }, []);

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Math.max(...products.map(p => p.id)) + 1,
            title: newProductName,
        };
        setProducts(currentProducts => [...currentProducts, newProduct]);
        setNewProductName('');
        setShowAddForm(false);
        
        toast.success('Changes made!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        });
    };

    const handleDeleteProduct = (productId) => {
        fetch(`https://dummyjson.com/products/${productId}`, {
            method: 'DELETE',
        })
        .then(() => {
            setProducts(currentProducts => currentProducts.filter(product => product.id !== productId));
            toast.success('changes made!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        theme: "light",
                    });
        })
        .catch(error => {
            toast.error('changes not saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "light",
            });
        });
    };
    

    if (error) {
        return <div>Error loading products: {error}</div>;
    }

    return (
        <div className="container">
            <h1>Inventory Management</h1>
            <button onClick={() => setShowAddForm(true)} className="btn btn-success mb-3">Add New Product</button>
            {showAddForm && (
                <form onSubmit={handleAddProduct} className="mb-3">
                    <input 
                        type="text"
                        value={newProductName}
                        onChange={(e) => setNewProductName(e.target.value)}
                        className="form-control mb-2"
                        placeholder="Enter product name"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            )}
            <h3>current list of products</h3>
           <div className="list-group">
                {products.map(product => (
                    <div key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {product.title}
                        <div>
                            <button onClick={() => handleDeleteProduct(product.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme='light'
                />
        </div>
    );
};

export default InventoryManagement;
