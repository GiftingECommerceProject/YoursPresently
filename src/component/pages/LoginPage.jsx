// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from "../../service/ApiService";
// import '../../style/register.css'


// const LoginPage = () => {

//     const [formData, setFormData] = useState({
//         email: '',
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
//             const response = await ApiService.loginUser(formData);
//             if (response.status === 200) {
//                 setMessage("User Successfully Loged in");
//                 localStorage.setItem('token', response.token);
//                 localStorage.setItem('role', response.role);
//                 setTimeout(() => {
//                     navigate("/profile")
//                 }, 4000)
//             }
//         } catch (error) {
//             setMessage(error.response?.data.message || error.message || "unable to Login a user");
//         }
//     }

//     return (
//         <div className="register-page">
//             <h2>Login</h2>
//             {message && <p className="message">{message}</p>}
//             <form onSubmit={handleSubmit}>
//                 <label>Email: </label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required />
                    
//                 <label>Password: </label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required />

//                     <button type="submit">Login</button>
                    
//                     <p className="register-link">
//                         Don't have an account? <a href="/register">Register</a>
//                     </p>
//             </form>
//         </div>
//     )
// }

// export default LoginPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/register.css";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
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
            const response = await ApiService.loginUser(formData);
            if (response.status === 200) {
                setMessage("✅ Login Successful! Redirecting...");
                localStorage.setItem("token", response.token);
                localStorage.setItem("role", response.role);
                setTimeout(() => {
                    navigate("/profile");
                }, 2000);
            }
        } catch (error) {
            setMessage("❌ " + (error.response?.data.message || "Login failed. Please try again."));
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4 login-card">
                <h2 className="text-center text-pink">Login</h2>
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

                    <button type="submit" className="btn btn-pink w-100">Login</button>

                    <p className="text-center mt-3">
                        <span className="text-white">Don't have an account?</span> 
                        <a href="/register" className="text-pink ms-2">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
