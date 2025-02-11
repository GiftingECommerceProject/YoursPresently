// import React, { useState, useEffect } from "react";
// import ApiService from "../../service/ApiService";
// import { useNavigate } from "react-router-dom";
// import '../../style/adminCategory.css'

// const AdminCategoryPage = () => {

//     const [categories, setCategories] = useState([]);
//     const navigate = useNavigate();


//     useEffect(()=>{
//         fetchCategories();
//     }, [])

//     const fetchCategories = async()=>{
//         try {
//             const response = await ApiService.getAllCategory();
//             setCategories(response.categoryList || []);
//         } catch (error) {
//             console.log("Error fetching category list",  error)
//         }
//     }

//     const handleEdit = async (id) => {
//         navigate(`/admin/edit-category/${id}`)
//     }
//     const handleDelete = async(id) => {
//         const confirmed = window.confirm("Are your sure you want to delete this category? ")
//         if(confirmed){
//             try {
//                 await ApiService.deleteCategory(id);
//                 fetchCategories();
//             } catch (error) {
//                 console.log("Error deleting category by id")
//             }
//         }
//     }

//     return(
//         <div className="admin-category-page">
//             <div className="admin-category-list">
//                 <h2>Categories</h2>
//                 <button onClick={()=> navigate('/admin/add-category')}>Add Category</button>
//                 <ul>
//                     {categories.map((category) => (
//                         <li key={category.id}>
//                             <span>{category.name}</span>
//                             <div className="admin-bt">
//                                     <button className="admin-btn-edit" onClick={()=> handleEdit(category.id)}>Edit</button>
//                                     <button  onClick={()=> handleDelete(category.id)}>Delete</button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default AdminCategoryPage;
// import React, { useState, useEffect } from "react";
// import ApiService from "../../service/ApiService";
// import { useNavigate } from "react-router-dom";
// import { Container, Card, Button, Table, Alert } from "react-bootstrap";
// import "../../style/adminCategory.css";

// const AdminCategoryPage = () => {
//     const [categories, setCategories] = useState([]);
//     const [message, setMessage] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     const fetchCategories = async () => {
//         try {
//             const response = await ApiService.getAllCategory();
//             setCategories(response.categoryList || []);
//         } catch (error) {
//             setMessage({ text: "Error fetching categories.", type: "danger" });
//         }
//     };

//     const handleEdit = (id) => {
//         navigate(`/admin/edit-category/${id}`);
//     };

//     const handleDelete = async (id) => {
//         const confirmed = window.confirm("Are you sure you want to delete this category?");
//         if (confirmed) {
//             try {
//                 await ApiService.deleteCategory(id);
//                 fetchCategories();
//                 setMessage({ text: "Category deleted successfully!", type: "success" });
//             } catch (error) {
//                 setMessage({ text: "Error deleting category.", type: "danger" });
//             }
//         }
//     };

//     return (
//         <Container className="admin-category-container">
//             <Card className="admin-category-card">
//                 <Card.Body>
//                     <h2 className="text-center">Categories</h2>
//                     {message && <Alert variant={message.type}>{message.text}</Alert>}
//                     <div className="d-flex justify-content-end mb-3">
//                         <Button className="add-category-btn" onClick={() => navigate("/admin/add-category")}>
//                             + Add Category
//                         </Button>
//                     </div>
//                     <Table striped bordered hover className="category-table">
//                         <thead>
//                             <tr>
//                                 <th>ID</th>
//                                 <th>Category Name</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {categories.length > 0 ? (
//                                 categories.map((category) => (
//                                     <tr key={category.id}>
//                                         <td>{category.id}</td>
//                                         <td>{category.name}</td>
//                                         <td>
//                                             <Button variant="warning" size="sm" onClick={() => handleEdit(category.id)}>
//                                                 Edit
//                                             </Button>{" "}
//                                             <Button variant="danger" size="sm" onClick={() => handleDelete(category.id)}>
//                                                 Delete
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="3" className="text-center">No categories available</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </Table>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default AdminCategoryPage;
import React, { useState, useEffect } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Table, Alert } from "react-bootstrap";
import "../../style/adminCategory.css";

const AdminCategoryPage = () => {
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await ApiService.getAllCategory();
            setCategories(response.categoryList || []);
        } catch (error) {
            setMessage({ text: "Error fetching categories.", type: "danger" });
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/edit-category/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this category?");
        if (confirmed) {
            try {
                await ApiService.deleteCategory(id);
                fetchCategories();
                setMessage({ text: "Category deleted successfully!", type: "success" });
            } catch (error) {
                setMessage({ text: "Error deleting category.", type: "danger" });
            }
        }
    };

    return (
        <Container className="admin-category-container">
            <Card className="admin-category-card">
                <Card.Body>
                    <h2 className="text-center">Categories</h2>
                    {message && <Alert variant={message.type}>{message.text}</Alert>}
                    <div className="d-flex justify-content-end mb-3">
                        <Button className="add-category-btn" onClick={() => navigate("/admin/add-category")}>
                            + Add Category
                        </Button>
                    </div>
                    <Table striped bordered hover className="category-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.length > 0 ? (
                                categories.map((category) => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>
                                            <Button variant="warning" size="sm" onClick={() => handleEdit(category.id)}>
                                                Edit
                                            </Button>{" "}
                                            <Button variant="danger" size="sm" onClick={() => handleDelete(category.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">No categories available</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AdminCategoryPage;

