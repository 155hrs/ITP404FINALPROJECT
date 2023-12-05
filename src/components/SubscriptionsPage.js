import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

document.title = "Subscription Page";

const SubscriptionsPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!firstName || !lastName || !city || !zip || !termsAccepted) {
            toast.error("Please fill all fields and agree to the terms and conditions.");
            return;
        }

        
        console.log({ firstName, lastName, city, zip });
        toast.success('successfully subscribed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "light",
        });
    };

    return (
        <div className="container">
            <h1>Subscription Form</h1>
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationCustom01" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationCustom02" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationCustom03" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Zip</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="validationCustom05" 
                        value={zip} 
                        onChange={(e) => setZip(e.target.value)} 
                        required 
                    />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="invalidCheck" 
                            checked={termsAccepted} 
                            onChange={(e) => setTermsAccepted(e.target.checked)} 
                            required 
                        />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SubscriptionsPage;
