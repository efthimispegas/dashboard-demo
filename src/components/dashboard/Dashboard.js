import React from 'react';
import Menu from '../common/menu/Menu';
import './Dashboard.scss'

const Dashboard = () => (
  <div className="demo-dashboard-container">
    <Menu />
    <div className="demo-main-page-container">
      <div className="demo-dashboard-header-container">
        <h4 className="demo-dashboard-header-text">Κεντρική Σελίδα</h4>
        <div className="demo-dashboard-searchbar"><p className="demo-dashboard-search-text">Αναζήτηση</p></div>
      </div>
      <div className="demo-dashboard-categories">
        {/* Make reuseable component */}
        <div className="demo-dashboard-item"><h6 className="demo-dashboard-item-text">Item 1</h6></div>
        <div className="demo-dashboard-item"><h6 className="demo-dashboard-item-text">Item 2</h6></div>
        <div className="demo-dashboard-item"><h6 className="demo-dashboard-item-text">Item 3</h6></div>
      </div>
    </div>
  </div>
  );

export default Dashboard;
