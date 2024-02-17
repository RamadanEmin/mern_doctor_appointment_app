import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Contact from '../pages/Contact';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:id' element={<DoctorDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route
                path='/users/profile/me'
                element={
                    <ProtectedRoute allowedRoles={['patient']}>
                        <MyAccount />
                    </ProtectedRoute>}
            />
            <Route
                path='/doctors/profile/me'
                element={
                    <ProtectedRoute allowedRoles={['doctor']}>
                        <Dashboard />
                    </ProtectedRoute>}
            />
        </Routes>
    );
};

export default Routers;