import './Header.css';
import TeslaLogo from '../assets/teslaLogoSmall.svg';

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='header__logo'>
          <img src={TeslaLogo} alt='' />
        </div>
        <div className='header__center'>
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Solar Roof</p>
          <p>Solar Panel</p>
        </div>
        <div className='header__right'>
          <p>Shop</p>
          <p>Tesla Account</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
