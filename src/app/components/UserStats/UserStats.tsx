import React, { useContext } from 'react';
import StatsCard from '../shared/StatsCard';
import { FitnessContext } from '../../context/FitnessContext';
import './UserStats.css'; // Optional CSS for styling

const UserStats: React.FC = () => {
    const { userStats } = useContext(FitnessContext); // Access global state

    return (
        <div className="user-stats">
            <StatsCard title="Workouts Completed" value={userStats.workoutsCompleted} />
            <StatsCard title="Calories Burned" value={userStats.caloriesBurned} />
            <StatsCard title="Total Steps" value={userStats.totalSteps} />
        </div>
    );
};

export default UserStats;
