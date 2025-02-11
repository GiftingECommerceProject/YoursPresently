import React from 'react';
import { Link } from 'react-router-dom';

const CorporatePage = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Corporate Client Portal</h1>
            <div className="row">
                {/* Corporate Feature Card */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="/images/Features.jpg" className="card-img-top" alt="Feature 1" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Management</h5>
                            <p className="card-text">Manage and view your employees, including their birthday details.</p>
                        </div>
                    </div>
                </div>
                {/* Corporate Feature Card */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="/images/Features.jpg" className="card-img-top" alt="Feature 2" />
                        <div className="card-body">
                            <h5 className="card-title">Add Employees</h5>
                            <p className="card-text">Add new employees to your corporate account easily.</p>
                        </div>
                    </div>
                </div>
                {/* Corporate Feature Card */}
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src="/images/Features.jpg" className="card-img-top" alt="Feature 3" />
                        <div className="card-body">
                            <h5 className="card-title">Employee Benefits</h5>
                            <p className="card-text">Manage employee birthday emails and other benefits.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-4">
                <h3>Join Now</h3>
                <p>Login or register to access the corporate portal and manage your employees.</p>
                <Link to="/corporate-login" className="btn btn-primary mx-2">Login</Link>
                <Link to="/corporate-register" className="btn btn-secondary mx-2">Register</Link>
            </div>
        </div>
    );
};

export default CorporatePage;
