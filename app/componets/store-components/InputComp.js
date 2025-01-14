"use client"
import React, { useState, useEffect } from 'react';

const InputComp = ({ value = 0, className = '', onChange,label,type='',placeHolder="" }) => {
    const [val, setVal] = useState(value); // Initialize state with prop value

    // Sync state with prop when `value` changes
    useEffect(() => {
        setVal(value);
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setVal(newValue); // Update local state
        if (onChange) onChange(newValue); // Notify parent (if callback is provided)
    };

    return (
        <div className='flex flex-col tracking-tighter'>
            <p  className="text-xs sm:text-sm my-2">
                {label}
            </p>
            <input
                placeholder={placeHolder}
                className={`border-[1px] border-black p-2 tracking-tighter focus:bg-[#ffffff] focus:border-black outline-none placeholder:text-sm ${className}`}
                value={val}
                type={type}
                onChange={handleChange} // Controlled input
            />
        </div>
    );
};

export default InputComp;
