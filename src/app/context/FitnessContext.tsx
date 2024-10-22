// src/app/context/FitnessContext.tsx

"use client"; // Ensure this is a client component

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
interface FitnessContextType {
    userStats: {
        workoutsCompleted: number;
        caloriesBurned: number;
        totalSteps: number;
    };
    setUserStats: React.Dispatch<React.SetStateAction<{
        workoutsCompleted: number;
        caloriesBurned: number;
        totalSteps: number;
    }>>;
}

// Create the context
const FitnessContext = createContext<FitnessContextType | undefined>(undefined);

// Create the provider component
export const FitnessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userStats, setUserStats] = useState({
        workoutsCompleted: 0,
        caloriesBurned: 0,
        totalSteps: 0,
    });

    return (
        <FitnessContext.Provider value={{ userStats, setUserStats }}>
            {children}
        </FitnessContext.Provider>
    );
};

// Custom hook for using the context
export const useFitness = () => {
    const context = useContext(FitnessContext);
    if (!context) {
        throw new Error('useFitness must be used within a FitnessProvider');
    }
    return context;
};
