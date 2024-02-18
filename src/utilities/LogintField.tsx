import React, { useState } from 'react';

const InputField: React.FC = () => {
    const [inputType, setInputType] = useState('text');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value.includes('@')) {
            setInputType('email');
        } else if (/^\d+$/.test(value)) {
            setInputType('number');
        } else {
            setInputType('text');
        }

        setInputValue(value);
    };

    return (
        <input
            type={inputType}
            placeholder="Phone, email"
            className="input login"
            value={inputValue}
            onChange={handleInputChange}
        />
    );
};

export default InputField;