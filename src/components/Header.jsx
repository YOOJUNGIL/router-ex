import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/conts">컨텐츠</Link></li>
    </ul>
  );
};

export default Header;