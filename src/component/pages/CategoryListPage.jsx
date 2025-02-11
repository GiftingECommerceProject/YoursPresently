// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import ApiService from "../../service/ApiService";
// import '../../style/categoryListPage.css'

// const CategoryListPage = () => {
//     const [categories, setCategories] = useState([]);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchCategories();
//     }, []);




//     const fetchCategories = async () => {
//         try {
//             const response = await ApiService.getAllCategory();
//             setCategories(response.categoryList || [])

//         } catch (err) {

//             setError(err.response?.data?.message || err.message || 'Unable to fetch categories')

//         }
//     }

//     const handleCategoryClick = (categoryId) => {
//         navigate(`/category/${categoryId}`);
//     } 

//     return(
//         <div className="category-list">
//             {error ? (
//                 <p className="error-message">{error}</p>
//             ):(
//                 <div>
//                     <h2>Categories</h2>
//                     <ul>
//                         {categories.map((category)=>(
//                             <li key={category.id}>
//                                 <button onClick={()=> handleCategoryClick(category.id)}>{category.name}</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default CategoryListPage;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../service/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/categoryListPage.css";

const CategoryListPage = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await ApiService.getAllCategory();
            setCategories(response.categoryList || []);
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Unable to fetch categories");
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center text-pink">Categories</h2>
            {loading ? (
                <div className="text-center mt-4">
                    <div className="spinner-border text-pink" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="alert alert-danger text-center">{error}</div>
            ) : (
                <div className="row justify-content-center">
                    {categories.map((category) => (
                        <div key={category.id} className="col-md-4 col-sm-6 mb-3">
                            <div 
                                className="card category-card text-center"
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryListPage;
