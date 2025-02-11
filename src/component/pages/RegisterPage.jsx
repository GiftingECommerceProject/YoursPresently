// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from "../../service/ApiService";
// import '../../style/register.css'


// const RegisterPage = () => {

//     const [formData, setFormData] = useState({
//         email: '',
//         name: '',
//         phoneNumber: '',
//         password: ''
//     });

//     const [message, setMessage] = useState(null);
//     const navigate = useNavigate();


//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await ApiService.registerUser(formData);
//             if (response.status === 200) {
//                 setMessage("User Successfully Registerd");
//                 setTimeout(() => {
//                     navigate("/login")
//                 }, 4000)
//             }
//         } catch (error) {
//             setMessage(error.response?.data.message || error.message || "unable to register a user");
//         }
//     }

//     return (
//         <div className="register-page">
//             <h2>Register</h2>
//             {message && <p className="message">{message}</p>}
//             <form onSubmit={handleSubmit}>
//                 <label>Email: </label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required />

//                 <label>Name: </label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required />


//                 <label>Phone Number: </label>
//                 <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required />

//                 <label>Password: </label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required />

//                     <button type="submit">Register</button>
//                     <p className="register-link">
//                         Already have an account? <a href="/login">Login</a>
//                     </p>
//             </form>
//         </div>
//     )
// }

// export default RegisterPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/register.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phoneNumber: "",
        password: ""
    });

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.registerUser(formData);
            if (response.status === 200) {
                setMessage("✅ Registration Successful! Redirecting...");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            setMessage("❌ " + (error.response?.data.message || "Registration failed. Please try again."));
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 ">
            <div className="card shadow-lg p-4 register-card " style={{ backgroundColor: '#333', color: 'white',width:'350px' }}>
                <h2 className="text-center text-pink ">Register</h2>
                {message && <div className="alert alert-warning text-center">{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label text-white">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-white">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-white">Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-white">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-pink w-100">Register</button>

                    <p className="text-center mt-3">
                        <span className="text-white">Already have an account?</span>
                        <a href="/login" className="text-pink ms-2">Login</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
