import React from 'react';
import PasswordForm from '../components/Auth/PasswordForm';

const UserProfilePage = (props) => {
    return (
        <div className='centered'>
            <h1>Profile Page</h1>
            <PasswordForm />
        </div>
    );
};

export default UserProfilePage;