import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        { id: 1, name: 'Pasha Belman', image: 'https://static.showit.co/1200/12cY08_BQialFWdKF1y8Lg/25111/headshots_myrtle_beach-_pasha_belman_myrtle_beach_headshots_for_professionals_-9.jpg', places: 3 },
        { id: 2, name: 'Jane Smith', image: 'https://block-studios.com/wp-content/uploads/2023/04/2-2-1024x683.png', places: 11 },
        { id: 3, name: 'Ian Johns', image: 'https://www.ianjohns.com/wp-content/uploads/2021/06/man-shaved-head-glasses-red-jacket-headshot.jpg', places: 5 },
        { id: 4, name: 'Leslie Smith', image: 'https://images.squarespace-cdn.com/content/v1/645182b76fc9f02d59d62a3c/1686260990382-GV4XR9UILBRNRN25XZ87/acting_headshots-86.jpg', places: 19 },
        { id: 5, name: 'JK Rowling', image: 'https://image4.photobiz.com/8038/6_20200320132442_17431608_xlarge.jpg', places: 2 },
        { id: 6, name: 'Bob Johnson', image: 'https://b1688923.smushcdn.com/1688923/wp-content/uploads/2022/05/Melbourne-Corporate-Headshots-Julia-Nance-Portraits1.jpg?lossy=2&strip=1&webp=1', places: 8  }
    ];

    return (
        <div>
            <h1>Users</h1>
            <UsersList users={USERS}/>
        </div>
    );
};

export default Users;