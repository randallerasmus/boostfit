// src/HomePage.tsx

import React from 'react';
import Login from '../app/components/login/Login';
import Sidebar from "@/app/components/navigation/Sidebar";
import Dashboard from "@/app/components/dashboard/Dashboard";
import {FitnessProvider} from "@/app/context/FitnessContext";


const HomePage: React.FC = () => {
    return (
        <FitnessProvider>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flexGrow: 1, padding: '20px' }}>
                    <h1>Fitness Management Dashboard</h1>
                    <Login />
                    <Dashboard />
                </div>
            </div>
        </FitnessProvider>
    );
};

export default HomePage;
