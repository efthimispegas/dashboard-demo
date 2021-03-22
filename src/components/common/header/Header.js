import { ReactComponent as SearchBarImage } from '../../../assets/SVG/search.svg';

import './Header.scss';

const Header = () => (
    <div className="demo-dashboard-header-container">
      <h4 className="demo-dashboard-header-text">Κεντρική Σελίδα</h4>
      <div className="demo-dashboard-searchbar">
        <SearchBarImage />
        <p className="demo-dashboard-search-text">Αναζήτηση υλικού, έλεγχος αποθεμάτων</p>
      </div>
    </div>
  );

export default Header;
