import React from "react";
import "./checkbox.css";

const Checkbox = ({ title, options, selectedValue, onChange, name }) => {
    const handleChange = (e) => {
        
        onChange(e.target.value);
    };

    return (
        <div>
            <h3>{title}</h3>
                <div className="flex flex-col">
           
                {options.map((option) => (
                <label key={option.id || option}>
                    <input
                        type="checkbox"
                        name={name}
                        value={option.id || option} 
                        checked={selectedValue === (option.id || option)} 
                        onChange={handleChange}
                    />
                    {option.name || option}  
                </label>
                ))}
                </div>
          
        </div>
    );
};

export default Checkbox;
