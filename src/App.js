import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/login';
import Index from './Dashboard/Index';
import UserProfile from './Dashboard/userprofile';
import UserManagement from './Dashboard/UserManagement';
import AddUser from './Dashboard/UserManagement/AddUser';
import RoleIndex from './Dashboard/RoleManagement/RoleIndex';
import AddRole from './Dashboard/RoleManagement/AddRole';
import Context from './Dashboard/UserManagement/Context';
//import { Context } from 'react';
import Contex from './Dashboard/UserManagement/Context';
function App() {
  return (
   <> 
   
          <Router>
            <Contex>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/dashboard" element={<Index />} />
              <Route path="/user-edit" element={<UserProfile />} />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/add-user" element={<AddUser/>} />
              <Route path="/role-management" element={<RoleIndex/>} />
              <Route path="/add-role" element={<AddRole/>} />
            </Routes>
            </Contex>
        </Router> 
        </>
  );
}

export default App;
