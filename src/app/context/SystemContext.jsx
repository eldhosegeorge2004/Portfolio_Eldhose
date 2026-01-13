"use client";
import React, { createContext, useState, useContext } from 'react';

const SystemContext = createContext();

export const SystemProvider = ({ children }) => {
    const [isSystemActive, setSystemActive] = useState(false);

    return (
        <SystemContext.Provider value={{ isSystemActive, setSystemActive }}>
            {children}
        </SystemContext.Provider>
    );
};

export const useSystem = () => useContext(SystemContext);
