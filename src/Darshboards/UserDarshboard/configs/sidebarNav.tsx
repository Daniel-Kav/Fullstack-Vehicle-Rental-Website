const sidebarNav = [
    {
        link: '/users',
        section: 'dashboard',
        icon: <i className='bx bx-home-alt'></i>,
        text: 'Dashboard'
    },
    {
        link: '/users/bookings', 
        section: 'bookings', 
        icon: <i className='bx bx-receipt'></i>,
        text: 'My Bookings'
    },
    {
        link: '/users/vehicles',
        section: 'vehicles',
        icon: <i className='bx bx-cube'></i>,
        text: 'Explore Vehicles'
    },
    {
        link: '/users/transactions',
        section: 'transactions',
        icon: <i className='bx bx-user'></i>,
        text: 'My Transactions'
    },
    {
        link: '/users/tickets',
        section: 'tickets',
        icon: <i className='bx bx-chart'></i>,
        text: 'My Tickets'
    },
    {
        link: '/users/profile',
        section: 'profile',
        icon: <i className='bx bx-cog'></i>,
        text: 'Profile'
    }
];

export default sidebarNav;
