import React from 'react';
import './StatsCard.css'; // Optional CSS for styling

interface StatsCardProps {
    title: string;
    value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
    return (
        <div className="stats-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default StatsCard;
