// import React from "react";
// import { useNavigate } from "react-router-dom";
// import '../../style/adminPage.css'


// const AdminPage = () => {
//     const navigate = useNavigate();

//     return(
//         <div className="admin-page">
//             <h1>Welcome Admin</h1>
//             <button onClick={()=> navigate("/admin/categories")}>Manage Categories</button>
//             <button onClick={()=> navigate("/admin/products")}>Manage Products</button>
//             <button onClick={()=> navigate("/admin/orders")}>Manage Orders</button>
//         </div>
//     )
// }

// export default AdminPage;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import '../../style/adminPage.css';

// const AdminPage = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="admin-dashboard d-flex">
//             {/* Sidebar */}
//             <aside className="sidebar">
//                 <h2 className="sidebar-title">Admin Panel</h2>
//                 <ul>
//                     <li onClick={() => navigate("/admin/categories")}>Manage Categories</li>
//                     <li onClick={() => navigate("/admin/products")}>Manage Products</li>
//                     <li onClick={() => navigate("/admin/orders")}>Manage Orders</li>
//                 </ul>
//             </aside>

//             {/* Main Content */}
//             <main className="dashboard-content">
//                 <h1 className="dashboard-title">Welcome, Admin</h1>
//                 <div className="dashboard-cards">
//                     <div className="card" onClick={() => navigate("/admin/categories")}>
//                         <h3>Categories</h3>
//                         <p>Manage product categories</p>
//                     </div>
//                     <div className="card" onClick={() => navigate("/admin/products")}>
//                         <h3>Products</h3>
//                         <p>View and manage all products</p>
//                     </div>
//                     <div className="card" onClick={() => navigate("/admin/orders")}>
//                         <h3>Orders</h3>
//                         <p>Track and manage orders</p>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default AdminPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import '../../style/adminPage.css';

const AdminPage = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard d-flex">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2 className="sidebar-title">Admin Panel</h2>
                <ul>
                    <li onClick={() => navigate("/admin/categories")}>Manage Categories</li>
                    <li onClick={() => navigate("/admin/products")}>Manage Products</li>
                    <li onClick={() => navigate("/admin/orders")}>Manage Orders</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="dashboard-content">
                <h1 className="dashboard-title">Welcome, Admin</h1>
                <div className="dashboard-cards">
                    <div className="card" onClick={() => navigate("/admin/categories")}>
                        <h3>Categories</h3>
                        <p>Manage product categories</p>
                    </div>
                    <div className="card" onClick={() => navigate("/admin/products")}>
                        <h3>Products</h3>
                        <p>View and manage all products</p>
                    </div>
                    <div className="card" onClick={() => navigate("/admin/orders")}>
                        <h3>Orders</h3>
                        <p>Track and manage orders</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminPage;

