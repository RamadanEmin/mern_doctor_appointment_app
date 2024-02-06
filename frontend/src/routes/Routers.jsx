import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Doctors from '../pages/Doctors/Doctors';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/doctors' element={<Doctors />} />
        </Routes>
    );
};

export default Routers;