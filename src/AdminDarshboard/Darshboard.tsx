// src/Darsh.tsx
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import {  Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Darshboard'
import MainLayout from './layout/MainLayout'
import User from './pages/Users'
import Vehicles from './pages/Vehicles'
import Bookings from './pages/Bookings'
import Transactions from './pages/Transactions'

function Darshboard() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="vehicles" element={<Vehicles />} />
                    <Route path="customers" element={<User />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="transactions" element={<Transactions />} />
                </Route>
            </Routes>
        // </BrowserRouter>
    )
}

export default Darshboard;
