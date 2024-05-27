import React from 'react';
import './dashboard.css';

const SideNavigation = () => {
  return (
    <div className="side-navigation">
      <ul>
        <li><a href="#widget1">Home</a></li>
        <li><a href="#widget2">Add Items</a></li>
        <li><a href="#widget3">Log out</a></li>
      </ul>
    </div>
  );
};

export default SideNavigation;
