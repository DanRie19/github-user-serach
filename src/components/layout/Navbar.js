import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Search',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
