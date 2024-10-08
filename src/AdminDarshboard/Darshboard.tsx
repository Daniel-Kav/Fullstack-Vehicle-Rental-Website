// src/Darsh.tsx
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import {  Routes, Route } from 'react-router-dom'
// import Blank from './pages/Blank'
import Dashboard from './pages/Darshboard'
import MainLayout from './layout/MainLayout'
import User from './pages/Users'
// import Vehicles from './pages/Vehicles'
import Bookings from './pages/Bookings'
import Transactions from './pages/Transactions'
import FleetManagementTable from '../Features/Fleet/FleetTable'
import Profile from './pages/Profile'
import SupportTicketsTable from './components/SupportTickets/TicketsTable'
import CarList from './components/cars/carItem'
import BranchesTable from '../Features/Branches/BranchesTable'

function Darshboard() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="vehicles" element={<CarList />} />
                    <Route path="customers" element={<User />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path='fleet-management' element={<FleetManagementTable />}/>
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="branches" element={<BranchesTable />} />
                    <Route path="support" element={<SupportTicketsTable />} />
                </Route>
            </Routes>
        // </BrowserRouter>
    )
}

export default Darshboard;
