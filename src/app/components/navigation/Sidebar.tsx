import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard Menu</h2>
            <ul>
                <li>Dashboard</li>
                <li>Workouts</li>
                <li>Nutrition</li>
                <li>Progress</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;
