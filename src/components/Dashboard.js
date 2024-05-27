import React, { useState, useEffect } from 'react';
import './dashboard.css';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock API call to fetch dashboard data
    const fetchItems = () => {
      const data = [
        { id: 1, name: 'Item 1', value: 100 },
        { id: 2, name: 'Item 2', value: 200 },
        { id: 3, name: 'Item 3', value: 300 }
      ];
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div className="dashboard">
      {items.map(item => (
        <div key={item.id} className="dashboard-widget" id={`widget${item.id}`}>
          <h3>{item.name}</h3>
          <p>Value: {item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
