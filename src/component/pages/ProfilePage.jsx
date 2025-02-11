// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from "../../service/ApiService";
// import '../../style/profile.css';
// import Pagination from "../common/Pagination";

// const ProfilePage = () => {

//     const [userInfo, setUserInfo] = useState(null);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 5;
//     const navigate = useNavigate();


//     useEffect(() => {

//         fetchUserInfo();
//     }, []);
//     const fetchUserInfo = async () => {

//         try {
//             const response = await ApiService.getLoggedInUserInfo();
//             console.log("User Info Response:", response); 
//             setUserInfo(response.user);
//         } catch (error) {
//             setError(error.response?.data?.message || error.message || 'Unable to fetch user info');
//         }
//     }

//     if (!userInfo) {
//         return <div>Loading...</div>
//     }

//     const handleAddressClick = () => {
//         navigate(userInfo.address ? '/edit-address' : '/add-address');
//     }

//     const orderItemList = userInfo.orderItemList || [];

//     const totalPages = Math.ceil(orderItemList.length / itemsPerPage);

//     const paginatedOrders = orderItemList.slice(
//         (currentPage - 1) * itemsPerPage,
//         currentPage * itemsPerPage
//     );




//     return (
//         <div className="profile-page">
//             <h2>Welcome {userInfo.name}</h2>

//             {error ? (
//                 <p className="error-message">{error}</p>
//             ) : (
//                 <div>
//                     <p><strong>Name: </strong>{userInfo.name}</p>
//                     <p><strong>Email: </strong>{userInfo.email}</p>
//                     <p><strong>Phone Number: </strong>{userInfo.phoneNumber}</p>

//                     <div>
//                         <h3>Address</h3>
//                         {userInfo.address ? (
//                             <div>
//                                 <p><strong>Street: </strong>{userInfo.address.street}</p>
//                                 <p><strong>City: </strong>{userInfo.address.city}</p>
//                                 <p><strong>State: </strong>{userInfo.address.state}</p>
//                                 <p><strong>Zip Code: </strong>{userInfo.address.zipCode}</p>
//                                 <p><strong>Country: </strong>{userInfo.address.country}</p>
//                             </div>
//                         ) : (
//                             <p>No Address information available</p>
//                         )}
//                         <button className="profile-button" onClick={handleAddressClick}>
//                             {userInfo.address ? "Edit Address" : "Add Address"}
//                         </button>
//                     </div>
//                     <h3>Order History</h3>
//                     <ul>
//                         {paginatedOrders.map(order => (
//                             <li key={order.id}>
//                                 <img src={order.product?.imageUrl} alt={order.product.name} />
//                                 <div>
//                                     <p><strong>Name: </strong>{order.product.name}</p>
//                                     <p><strong>Status: </strong>{order.status}</p>
//                                     <p><strong>Quantity: </strong>{order.quantity}</p>
//                                     <p><strong>Price: </strong>{order.price.toFixed(2)}</p>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                     <Pagination
//                     currentPage={currentPage}
//                     totalPages={totalPages}
//                     onPageChange={(page)=> setCurrentPage(page)}/>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default ProfilePage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/profile.css";
import Pagination from "../common/Pagination";

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Show only 2 recent orders
    const navigate = useNavigate();

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const response = await ApiService.getLoggedInUserInfo();
            setUserInfo(response.user);
        } catch (error) {
            setError(error.response?.data?.message || error.message || "Unable to fetch user info");
        }
    };

    if (!userInfo) {
        return (
            <div className="loading-container">
                <div className="spinner-border text-pink" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const handleAddressClick = () => {
        navigate(userInfo.address ? "/edit-address" : "/add-address");
    };

    const orderItemList = userInfo.orderItemList || [];
    const totalPages = Math.ceil(orderItemList.length / itemsPerPage);
    const paginatedOrders = orderItemList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="profile-container">
            <div className="profile-content">
                {/* Left Section: Personal Details */}
                <div className="profile-left">
                    <div className="profile-card">
                        <img src="/images/pp.jpg" alt="Profile" className="profile-pic" />
                        <h2 className="text-pink">{userInfo.name}</h2>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>Phone:</strong> {userInfo.phoneNumber}</p>
                    </div>
                </div>

                {/* Right Section: Address & Orders */}
                <div className="profile-right">
                    <div className="section-card">
                        <h3 className="text-pink">Address</h3>
                        {userInfo.address ? (
                            <div>
                                <p><strong>Street:</strong> {userInfo.address.street}</p>
                                <p><strong>City:</strong> {userInfo.address.city}</p>
                                <p><strong>State:</strong> {userInfo.address.state}</p>
                                <p><strong>Zip Code:</strong> {userInfo.address.zipCode}</p>
                                <p><strong>Country:</strong> {userInfo.address.country}</p>
                            </div>
                        ) : (
                            <p>No Address information available</p>
                        )}
                        <button className="btn btn-outline-pink mt-2" onClick={handleAddressClick}>
                            {userInfo.address ? "Edit Address" : "Add Address"}
                        </button>
                    </div>

                    {/* Order History */}
                    <div className="section-card">
                        <h3 className="text-pink">Recent Orders</h3>
                        {paginatedOrders.length > 0 ? (
                            <ul className="order-list">
                                {paginatedOrders.map((order) => (
                                    <li key={order.id} className="order-item">
                                        <img src={order.product?.imageUrl} alt={order.product.name} className="order-img" />
                                        <div className="order-details">
                                            <p><strong>Name:</strong> {order.product.name}</p>
                                            <p><strong>Status:</strong> {order.status}</p>
                                            <p><strong>Quantity:</strong> {order.quantity}</p>
                                            <p><strong>Price:</strong> ₹{order.price.toFixed(2)}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No recent orders.</p>
                        )}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
