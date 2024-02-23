import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';
import './UsersList.css';

const UsersList = ({ users }) => {
    if (users.length === 0) {
        return (
            <div>
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
        );
    }

    return (
        <div className='center'>
            <ul className='users-list'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </ul>
        </div>
    );
};

export default UsersList;