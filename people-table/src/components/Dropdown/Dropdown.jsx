import React from "react";
import { useState } from "react";

import "./Dropdown.css";

const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    const options = ["--1--", "--3--", "--5--", "All"];

    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={() => setIsActive(!isActive)}
            >
                {selected}
                <span className="fas fa-create-down">▼</span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
