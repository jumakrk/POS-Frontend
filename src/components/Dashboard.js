import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Sales from './Sales';
import Products from './Products';
import Customers from './Customers';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <Router>
            <div className="dashboard">
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/sales" component={Sales} />
                        <Route path="/products" component={Products} />
                        <Route path="/customers" component={Customers} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;
