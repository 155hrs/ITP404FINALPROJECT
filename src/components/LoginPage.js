import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

document.title = "User Login Page";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
    
        if (username === 'ITP404' && password === 'FALL2023') {
            toast.success('Login successful!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "light",
            });

        } else {
            toast.error('Invalid username or password!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "light",
            });
        }
    }

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (!username) {
            isValid = false;
            errors['username'] = 'Username is required';
        }

        if (!password) {
            isValid = false;
            errors['password'] = 'Password is required';
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <div className="text-danger">{errors.username}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;
