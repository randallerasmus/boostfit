// src/app/components/dashboard/Dashboard.tsx

"use client"; // Ensure this is a client component

import React from 'react';
import { useFitness } from '../../context/FitnessContext'; // Ensure the path is correct

const Dashboard: React.FC = () => {
    const { userStats } = useFitness(); // Get user stats from context

    return (
        <div>
            <h2>Your Dashboard</h2>
            <p>Workouts Completed: {userStats.workoutsCompleted}</p>
            <p>Calories Burned: {userStats.caloriesBurned}</p>
            <p>Total Steps: {userStats.totalSteps}</p>
        </div>
    );
};

export default Dashboard;
