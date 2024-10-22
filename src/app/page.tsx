// src/HomePage.tsx

"use client"; // Mark this component as a Client Component

import React, { useState } from 'react';
import Login from '../app/components/login/Login';
import Sidebar from "@/app/components/navigation/Sidebar";
import Dashboard from "@/app/components/dashboard/Dashboard";
import { FitnessProvider } from "@/app/context/FitnessContext";

const HomePage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    const handleLogin = () => {
        setIsLoggedIn(true); // Set login state to true on button click
    };

    return (
        <FitnessProvider>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flexGrow: 1, padding: '20px' }}>
                    <h1>Fitness Management Dashboard</h1>
                    {!isLoggedIn ? ( // Conditional rendering based on login state
                        <Login onLogin={handleLogin} />
                    ) : (
                        <Dashboard /> // Show Dashboard if logged in
                    )}
                </div>
            </div>
        </FitnessProvider>
    );
};

export default HomePage;
