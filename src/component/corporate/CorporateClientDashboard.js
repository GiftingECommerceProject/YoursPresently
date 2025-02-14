import React, { useEffect, useState } from 'react';
import ApiService from '../../service/ApiService';
import { useNavigate } from 'react-router-dom';

const CorporateClientDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [corporateClientId, setCorporateClientId] = useState(1); // Assume the corporate client ID is available
    const navigate = useNavigate();

    // useEffect(() => {
    //     const fetchEmployees = async () => {
    //         try {
    //             const response = await ApiService.getEmployeesByCorporateClient(corporateClientId);
    //             setEmployees(response); // Ensure ApiService returns a list of employees
    //         } catch (error) {
    //             console.error('Error fetching employees:', error);
    //         }
    //     };

    //     fetchEmployees();
    // }, [corporateClientId]);

    const handleAddEmployee = async (e) => {
        e.preventDefault();
        const employeeData = { name, email, birthDate };

        try {
            await ApiService.addEmployee(corporateClientId, employeeData); 
            alert('Employee added successfully!');
            setName('');
            setEmail('');
            setBirthDate('');
            // fetchEmployees(); 
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee.');
        }
    };

    return (
        <div className="container">
            <h1>Corporate Client Dashboard</h1>

            {/* Employee List
            <h2>Employees</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length === 0 ? (
                        <tr><td colSpan="3">No employees found</td></tr>
                    ) : (
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.birthDate}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table> */}

            {/* Add Employee Form */}
            <h3>Add New Employee</h3>
            <form onSubmit={handleAddEmployee}>
                <div className="form-group">
                    <label htmlFor="employeeName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="employeeName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="employeeEmail">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="employeeEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="employeeBirthDate">Birthdate</label>
                    <input
                        type="date"
                        className="form-control"
                        id="employeeBirthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Employee</button>
            </form>
        </div>
    );
};

export default CorporateClientDashboard;
