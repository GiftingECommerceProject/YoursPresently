// import React, { useState } from "react";
// import ApiService from "../../service/ApiService";
// import { useNavigate } from "react-router-dom";
// import '../../style/addCategory.css'

// const AddCategory = () => {
//     const [name, setName] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await ApiService.createCategory({name});
//             if (response.status === 200) {
//                 setMessage(response.message);
//                 setTimeout(()=>{
//                     setMessage('');
//                     navigate("/admin/categories")
//                 }, 3000)
//             }
//         } catch (error) {
//             setMessage(error.response?.data?.message || error.message || "Failed to save a category")
//         }
//     }

//     return(
//         <div className="add-category-page">
//             {message && <p className="message">{message}</p>}
//             <form onSubmit={handleSubmit} className="category-form">
//                 <h2>Add Category</h2>
//                 <input type="text"
//                 placeholder="Category Name"
//                 value={name}
//                 onChange={(e)=> setName(e.target.value)} />

//                 <button type="submit">Add</button>
//             </form>
//         </div>
//     )
// }

// export default AddCategory;
import React, { useState } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import "../../style/addCategory.css";

const AddCategory = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ApiService.createCategory({ name });
            if (response.status === 200) {
                setMessage({ text: response.message, type: "success" });
                setTimeout(() => {
                    setMessage('');
                    navigate("/admin/categories");
                }, 3000);
            }
        } catch (error) {
            setMessage({ text: error.response?.data?.message || error.message || "Failed to save category", type: "danger" });
        }
    };

    return (
        <Container className="add-category-container">
            <Card className="add-category-card">
                <Card.Body>
                    <h2 className="text-center">Add Category</h2>
                    {message && <Alert variant={message.type}>{message.text}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter category name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </Form.Group>
                        <Button type="submit" className="w-100">Add Category</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddCategory;
