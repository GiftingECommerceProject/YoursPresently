// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../style/adminProduct.css'
// import Pagination from "../common/Pagination";
// import ApiService from "../../service/ApiService";

// const AdminProductPage = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [error, setError] = useState(null);
//     const itemsPerPage = 10;


//     const fetchProducts = async() => {
//         try {
//             const response = await ApiService.getAllProducts();
//             const productList = response.productList || [];
//             setTotalPages(Math.ceil(productList.length/itemsPerPage));
//             setProducts(productList.slice((currentPage -1) * itemsPerPage, currentPage * itemsPerPage));
//         } catch (error) {
//             setError(error.response?.data?.message || error.message || 'unable to fetch products')
            
//         }
//     }

//     useEffect(()=>{
//         fetchProducts();
//     }, [currentPage]);

//     const handleEdit = async (id) => {
//         navigate(`/admin/edit-product/${id}`)
//     }
//     const handleDelete = async(id) => {
//         const confirmed = window.confirm("Are your sure you want to delete this product? ")
//         if(confirmed){
//             try {
//                 await ApiService.deleteProduct(id);
//                 fetchProducts();
//             } catch (error) {
//                 setError(error.response?.data?.message || error.message || 'unable to delete product')
//             }
//         }
//     }

//     return(
//         <div className="admin-product-list">
//             {error ? (
//                 <p className="error-message">{error}</p>
//             ): (
//                 <div>
//                     <h2>Products</h2>
//                     <button className="product-btn" onClick={()=> {navigate('/admin/add-product'); }}>Add product</button>
//                     <ul>
//                         {products.map((product)=>(
//                             <li key={product.id}>
//                                 <span>{product.name}</span>
//                                 <button className="product-btn" onClick={()=> handleEdit(product.id)}>Edit</button>
//                                 <button className="product-btn-delete" onClick={()=> handleDelete(product.id)}>Delete</button>
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
// export default AdminProductPage;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../../style/adminProduct.css';
// import Pagination from "../common/Pagination";
// import ApiService from "../../service/ApiService";

// const AdminProductPage = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [error, setError] = useState(null);
//     const itemsPerPage = 10;

//     const fetchProducts = async () => {
//         try {
//             const response = await ApiService.getAllProducts();
//             const productList = response.productList || [];
//             setTotalPages(Math.ceil(productList.length / itemsPerPage));
//             setProducts(productList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
//         } catch (error) {
//             setError(error.response?.data?.message || error.message || 'Unable to fetch products');
//         }
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, [currentPage]);

//     const handleEdit = async (id) => {
//         navigate(`/admin/edit-product/${id}`);
//     };

//     const handleDelete = async (id) => {
//         const confirmed = window.confirm("Are you sure you want to delete this product?");
//         if (confirmed) {
//             try {
//                 await ApiService.deleteProduct(id);
//                 fetchProducts(); // Refresh products list after deletion
//             } catch (error) {
//                 setError(error.response?.data?.message || error.message || 'Unable to delete product');
//             }
//         }
//     };

//     return (
//         <div className="admin-product-list">
//             {error ? (
//                 <p className="error-message">{error}</p>
//             ) : (
//                 <div>
//                     <h2 className="text-white">Products</h2>
//                     <button
//                         className="btn btn-pink mb-4"
//                         onClick={() => navigate('/admin/add-product')}
//                     >
//                         Add Product
//                     </button>
//                     <ul className="list-group">
//                         {products.map((product) => (
//                             <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
//                                 <span>{product.name}</span>
//                                 <div className="product-actions">
//                                     <button
//                                         className="btn btn-pink"
//                                         onClick={() => handleEdit(product.id)}
//                                     >
//                                         Edit
//                                     </button>
//                                     <button
//                                         className="btn btn-delete"
//                                         onClick={() => handleDelete(product.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                     <Pagination
//                         currentPage={currentPage}
//                         totalPages={totalPages}
//                         onPageChange={(page) => setCurrentPage(page)}
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminProductPage;
import React, { useState, useEffect } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Table, Alert } from "react-bootstrap";
import "../../style/adminProduct.css";

const AdminProductPage = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await ApiService.getAllProducts();
            setProducts(response.productList || []);
        } catch (error) {
            setMessage({ text: "Error fetching products.", type: "danger" });
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/edit-product/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (confirmed) {
            try {
                await ApiService.deleteProduct(id);
                fetchProducts();
                setMessage({ text: "Product deleted successfully!", type: "success" });
            } catch (error) {
                setMessage({ text: "Error deleting product.", type: "danger" });
            }
        }
    };

    return (
        <Container className="admin-product-container">
            <Card className="admin-product-card">
                <Card.Body>
                    <h2 className="text-center">Products</h2>
                    {message && <Alert variant={message.type}>{message.text}</Alert>}
                    <div className="d-flex justify-content-end mb-3">
                        <Button className="add-product-btn" onClick={() => navigate("/admin/add-product")}>
                            + Add Product
                        </Button>
                    </div>
                    <Table striped bordered hover className="product-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            <Button variant="warning" size="sm" onClick={() => handleEdit(product.id)}>
                                                Edit
                                            </Button>{" "}
                                            <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No products available</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AdminProductPage;

