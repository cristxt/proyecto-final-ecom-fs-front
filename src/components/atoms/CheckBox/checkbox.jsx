import React, { useState } from "react";

const Checkbox = ({ title, options, selectedValue, onChange, name }) => {
    return (
        <div className="checkbox-group">
            <h3>{title}</h3>
            {options.map((option, index) => (
                <div className="checkbox-item" key={index}>
                    <input
                        type="checkbox"
                        id={`${name}-${index}`}
                        name={name}
                        value={option}
                        checked={selectedValue === option}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <label htmlFor={`${name}-${index}`}>{option}</label>
                </div>
                
            ))}
        </div>
    );
};

export default Checkbox;
