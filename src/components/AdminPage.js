import React, { useState, useEffect, useRef } from 'react';
import {ToastContainer, toast} from 'react-toastify';

const AdminPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(new Set());
    const selectAllRef = useRef(null);

    useEffect(() => {
        document.title = "Administrative Page for Bulk Editing";
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error:', error));
    }, []);

    const toggleSelectAll = () => {
        if (selectAllRef.current.checked) {
            setSelectedProducts(new Set(products.map(p => p.id)));
        } else {
            setSelectedProducts(new Set());
        }
    };

    const handleProductSelect = (id) => {
        setSelectedProducts(current => {
            const newSelection = new Set(current);
            if (newSelection.has(id)) {
                newSelection.delete(id);
            } else {
                newSelection.add(id);
            }
            return newSelection;
        });
    };

    const handleBulkDelete = async () => {
        // console.log('Deleting products:', [...selectedProducts]);
        setProducts(currentProducts => 
            currentProducts.filter(product => !selectedProducts.has(product.id))
        );
        setSelectedProducts(new Set());

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

    useEffect(() => {
        if (products.length > 0 && selectedProducts.size > 0 && selectedProducts.size < products.length) {
            selectAllRef.current.indeterminate = true;
        } else {
            selectAllRef.current.indeterminate = false;
        }
    }, [selectedProducts, products]);


    return (
        <div className="container">
            <h1>Admin Page</h1>
            {selectedProducts.size > 0 && (
                <button className="btn btn-danger mb-3" onClick={handleBulkDelete}>Delete Selected ({selectedProducts.size})</button>
            )}
            <table className="table">
                <thead>
                    <tr>
                        <th><input ref={selectAllRef} type="checkbox" onChange={toggleSelectAll} /></th>
                        <th>product</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedProducts.has(product.id)}
                                    onChange={() => handleProductSelect(product.id)}
                                />
                            </td>
                            <td>{product.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

export default AdminPage;
