import React, { memo } from 'react';

const Navbar = memo(({ totalCount }) => {
  return (
    <nav className="navbar">
      <i className="navbar-logo fas fa-clipboard"></i>
      <span>Habit Tracker</span>
      <span className="navbar-count">{totalCount}</span>
    </nav>
  );
});

export default Navbar;
