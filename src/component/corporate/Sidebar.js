import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', background: '#f8f9fa', height: '100vh', padding: '20px' }}>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard/summary/1">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/employees/add/1">Add Employee</Nav.Link>
        <Nav.Link as={Link} to="/corporate-clients/register">Register Corporate Client</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
