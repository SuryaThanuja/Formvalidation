import React, { useState } from "react";
import validator from 'validator'
import './App.css';

const App = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        })) {
            setErrorMessage('✅ Strong Password');
        } else {
            setErrorMessage('❌ Not a Strong Password');
        }
    };

    return (
        <div className="container">
            <h2>Password Strength Validator</h2>
            <input type="password" placeholder="Enter Password..." onChange={(e) => validate(e.target.value)} />
            {errorMessage && <p className="message">{errorMessage}</p>}
        </div>
    );
};

export default App;