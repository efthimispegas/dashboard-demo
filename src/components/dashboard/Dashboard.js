import React from 'react';
import CategoriesList from '../categoriesList/CategoriesList';
import Header from '../common/header/Header';
import Menu from '../common/menu/Menu';
import './Dashboard.scss'

const Dashboard = () => (
  <div className="demo-dashboard-container">
    <Menu />
    <div className="demo-main-page-container">
      <Header />
      <CategoriesList />
    </div>
  </div>
  );

export default Dashboard;
