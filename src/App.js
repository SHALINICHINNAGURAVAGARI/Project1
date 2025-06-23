import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserForm from './Forms/UserForm';
import FormDetails from './Forms/FormDetails';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/formdetails" element={<FormDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
