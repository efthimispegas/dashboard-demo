import React from 'react';
import { ReactComponent as MenuHeaderImage } from '../../../assets/SVG/warehouse-management.svg';
import { ReactComponent as MenuOptionsImage } from '../../../assets/SVG/options-menu.svg';
import { ReactComponent as WareHouseImage1 } from '../../../assets/SVG/menu-item-1.svg';
import { ReactComponent as WareHouseImage2 } from '../../../assets/SVG/menu-item-2.svg';
import { ReactComponent as WareHouseImage3 } from '../../../assets/SVG/menu-item-3.svg';
import { ReactComponent as WareHouseImage4 } from '../../../assets/SVG/menu-item-4.svg';
import { ReactComponent as WareHouseImage5 } from '../../../assets/SVG/menu-item-5.svg';
import { ReactComponent as HomeImage } from '../../../assets/SVG/home.svg';
import { ReactComponent as SettingsImage } from '../../../assets/SVG/settings.svg';
import { ReactComponent as RegisterImage } from '../../../assets/SVG/register.svg';
import './MenuOptionList.scss';

const MenuOptionList = () => (
  <>
    <div className="demo-menu-header">
      <MenuHeaderImage />
    </div>

    <div className="demo-option-menu-container">
      <div className="demo-option-menu-header">
        <a href="#"><MenuOptionsImage /></a>
      </div>
      <div className="demo-menu-option home">
        <HomeImage />
        <a href="#"><p className="demo-menu-option-text">Κεντρική σελίδα</p></a>
      </div>
      <div className="demo-menu-option option">
        <WareHouseImage1 />
        <a href="#"><p className="demo-menu-option-text">Αποθήκη 1</p></a>
      </div>
      <div className="demo-menu-option option">
        <WareHouseImage2 />
        <a href="#"><p className="demo-menu-option-text">Αποθήκη 2</p></a>
      </div>
      <div className="demo-menu-option option">
        <WareHouseImage3 />
        <a href="#"><p className="demo-menu-option-text">Αποθήκη 3</p></a>
      </div>
      <div className="demo-menu-option option">
        <WareHouseImage4 />
        <a href="#"><p className="demo-menu-option-text">Αποθήκη 4</p></a>
      </div>
    </div>

    <div className="demo-registry-menu-container">
      <div className="demo-registry-menu-header">
        <a href="#"><RegisterImage /></a>
      </div>
      <div className="demo-menu-option option">
        <a href="#"><WareHouseImage5 /></a>
      </div>
    </div>

    <div className="demo-menu-settings-container">
      <div className="demo-menu-settings-header">
        <a href="#"><SettingsImage /></a>
      </div>
    </div>
  </>
  );

export default MenuOptionList;
