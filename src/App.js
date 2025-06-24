import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './Forms/UserForm';
import FormDetails from './Forms/FormDetails';

function App() {
  // Initialize users from localStorage if available
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem('userFormDataList');
    return stored ? JSON.parse(stored) : [];
  });

  // Sync users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem('userFormDataList', JSON.stringify(users));
  }, [users]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm setUsers={setUsers} />} />
        <Route path="/formdetails" element={<FormDetails users={users} setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
}

export default App;
