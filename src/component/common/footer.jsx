// import React from "react";
// import '../../style/footer.css';
// import { NavLink } from "react-router-dom";

// const Footer = () => {

//     return (
//         <footer className="footer">
//             <div className="footer-links">
//                 <ul>
//                     <NavLink to={"/"}>About Us</NavLink>
//                     <NavLink to={"/"}>Contact Us</NavLink>
//                     <NavLink to={"/"}>Terms & Cnnditions</NavLink>
//                     <NavLink to={"/"}>Privacy Policy</NavLink>
//                     <NavLink to={"/"}>FAQs</NavLink>
//                 </ul>
//             </div>
//             <div className="footer-info">
//                 <p>&copy; 2024 CodeKul. All right reserved.</p>
//             </div>
//         </footer>
//     )
// }
// export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container text-center">
                <div className="row">
                    <div className="col-12">
                        <ul className="list-unstyled d-flex justify-content-center gap-4 mb-3">
                            <li><NavLink to="/" className="text-white text-decoration-none">About Us</NavLink></li>
                            <li><NavLink to="/" className="text-white text-decoration-none">Contact Us</NavLink></li>
                            <li><NavLink to="/" className="text-white text-decoration-none">Terms & Conditions</NavLink></li>
                            <li><NavLink to="/" className="text-white text-decoration-none">Privacy Policy</NavLink></li>
                            <li><NavLink to="/" className="text-white text-decoration-none">FAQs</NavLink></li>
                        </ul>
                        <p className="mb-0">&copy; 2025 YoursPresently. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
