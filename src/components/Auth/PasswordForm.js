import React from 'react';
import classes from './PasswordForm.module.css';

const PasswordForm = (props) => {
    return (
        <div className={classes.form}>
            <h2>Change your password</h2>
            <input type="text" />
            <button>Change password</button>
        </div>
    );
};

export default PasswordForm;