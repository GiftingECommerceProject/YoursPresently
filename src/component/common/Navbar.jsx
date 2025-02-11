// import React, {useState} from "react";
// import '../../style/navbar.css';
// import { NavLink, useNavigate } from "react-router-dom";
// import ApiService from "../../service/ApiService";


// const Navbar = () =>{

//     const [searchValue, setSearchValue] = useState("");
//     const navigate = useNavigate();

//     const isAdmin = ApiService.isAdmin();
//    // const isVendor = ApiService.isVendor();
//     const isAuthenticated = ApiService.isAuthenticated();

//     const handleSearchChange =(e) => {
//         setSearchValue(e.target.value);
//     }

//     const handleSearchSubmit = async (e) =>{
//         e.preventDefault();
//         navigate(`/?search=${searchValue}`)
//     }

//     const handleLogout = () => {
//         const confirm = window.confirm("Are you sure you want to logout? ");
//         if(confirm){
//             ApiService.logout();
//             setTimeout(()=>{
//                 navigate('/login')
//             }, 500);
//         }
//     }

//     return(
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <NavLink to="/" > <img src="" alt="CodeKul Mart" /></NavLink>
//             </div>
//             {/* SEARCH FORM */}
//             <form className="navbar-search" onSubmit={handleSearchSubmit}>
//                 <input type="text" 
//                 placeholder="Search products" 
//                 value={searchValue}
//                 onChange={handleSearchChange} />
//                 <button type="submit">Search</button>
//             </form>

//             <div className="navbar-link">
//                 <NavLink to="/" >Home</NavLink>
//                 <NavLink to="/categories" >Categories</NavLink>
//                 {isAuthenticated && <NavLink to="/profile" >My Account</NavLink>}
//                 {isAdmin && <NavLink to="/admin" >Admin</NavLink>}
//                 {/* {isVendor && <NavLink to="/vendor" >Vendor</NavLink>} */}
//                 {!isAuthenticated && <NavLink to="/login" >Login</NavLink>}
//                 {isAuthenticated &&<NavLink onClick={handleLogout} >Logout</NavLink>}
//                 <NavLink to="/cart">Cart</NavLink>
//             </div>
//         </nav>
//     );

// };
// export default Navbar;
// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import ApiService from "../../service/ApiService";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../style/navbar.css"; 

// const Navbar = () => {
//     const [searchValue, setSearchValue] = useState("");
//     const navigate = useNavigate();

//     const isAdmin = ApiService.isAdmin();
//     const isAuthenticated = ApiService.isAuthenticated();

//     const handleSearchChange = (e) => {
//         setSearchValue(e.target.value);
//     };

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         navigate(`/?search=${searchValue}`);
//     };

//     const handleLogout = () => {
//         const confirmLogout = window.confirm("Are you sure you want to logout?");
//         if (confirmLogout) {
//             ApiService.logout();
//             setTimeout(() => {
//                 navigate('/login');
//             }, 500);
//         }
//     };

//     return (
//         <nav className="navbar navbar-expand-lg bg-white shadow-sm">
//             <div className="container">
//                 {/* Logo */}
//                 <NavLink className="navbar-brand text-pink fw-bold" to="/">
//                     <img src="/logo.png" alt="CodeKul Mart" width="120" />
//                 </NavLink>

//                 {/* Mobile Toggle Button */}
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     data-bs-toggle="collapse" 
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* Navbar Links */}
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto align-items-center">
//                         <li className="nav-item">
//                             <NavLink className="nav-link text-pink" to="/">Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link text-pink" to="/categories">Categories</NavLink>
//                         </li>
//                         {isAuthenticated && (
//                             <li className="nav-item">
//                                 <NavLink className="nav-link text-pink" to="/profile">My Account</NavLink>
//                             </li>
//                         )}
//                         {isAdmin && (
//                             <li className="nav-item">
//                                 <NavLink className="nav-link text-pink" to="/admin">Admin</NavLink>
//                             </li>
//                         )}
//                         {!isAuthenticated && (
//                             <li className="nav-item">
//                                 <NavLink className="nav-link text-pink" to="/login">Login</NavLink>
//                             </li>
//                         )}
//                         {isAuthenticated && (
//                             <li className="nav-item">
//                                 <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>Logout</button>
//                             </li>
//                         )}
//                         <li className="nav-item">
//                             <NavLink className="nav-link text-pink" to="/cart">Cart</NavLink>
//                         </li>
//                     </ul>

//                     {/* Search Form */}
//                     <form className="d-flex ms-lg-3" onSubmit={handleSearchSubmit}>
//                         <input 
//                             type="text" 
//                             className="form-control me-2" 
//                             placeholder="Search products" 
//                             value={searchValue} 
//                             onChange={handleSearchChange} 
//                         />
//                         <button className="btn btn-pink" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/navbar.css"; 

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const isAdmin = ApiService.isAdmin();
    const isAuthenticated = ApiService.isAuthenticated();

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/?search=${searchValue}`);
    };

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            ApiService.logout();
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
            <div className="container">
                {/* Logo */}
                <NavLink className="navbar-brand text-pink fw-bold" to="/">
                    {/* <img src="/logo.png" alt="YoursPresently" width="120" /> */}
                    <h4>YoursPresently</h4>
                </NavLink>

                {/* Mobile Toggle Button */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-pink" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-pink" to="/categories">Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-pink" to="/cart">Cart</NavLink>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link text-pink" to="/profile">My Account</NavLink>
                            </li>
                        )}
                        {isAdmin && (
                            <li className="nav-item">
                                <NavLink className="nav-link text-pink" to="/admin">Admin</NavLink>
                            </li>
                        )}
                        {!isAuthenticated && (
                            <li className="nav-item">
                                <NavLink className="nav-link text-pink" to="/login">Login</NavLink>
                            </li>
                        )}
                        {isAuthenticated && (
                            <li className="nav-item">
                                <button className="btn btn-outline-pink ms-2" onClick={handleLogout}>Logout</button>
                            </li>
                        )}
                        {/* <li className="nav-item">
  <NavLink className="nav-link text-pink" to="/corporate-login">Corporate Login</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link text-pink" to="/corporate-register">Corporate Register</NavLink>
</li> */}
<li className="nav-item">
                            <NavLink className="nav-link" to="/corporate-page">Corporate Portal</NavLink>
                        </li>

                        
                    </ul>

                    {/* Search Form */}
                    <form className="d-flex ms-lg-3" onSubmit={handleSearchSubmit}>
                        <input 
                            type="text" 
                            className="form-control search-bar" 
                            placeholder="Search products" 
                            value={searchValue} 
                            onChange={handleSearchChange} 
                        />
                        <button className="btn btn-pink ms-2" type="submit">Search</button>
                    </form>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

