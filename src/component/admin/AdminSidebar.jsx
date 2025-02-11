import React from "react";
import { useNavigate } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "../../style/AdminSidebar.css"; 

const AdminSidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-sidebar">
            <h3>Admin Panel</h3>
            <ListGroup variant="flush">
                <ListGroup.Item onClick={() => navigate("/admin/dashboard")}>Dashboard</ListGroup.Item>
                <ListGroup.Item onClick={() => navigate("/admin/categories")}>Manage Categories</ListGroup.Item>
                <ListGroup.Item onClick={() => navigate("/admin/products")}>Manage Products</ListGroup.Item>
                <ListGroup.Item onClick={() => navigate("/admin/orders")}>Manage Orders</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default AdminSidebar;
