import React from 'react';
import { HeaderBar, HeaderText } from './StyledComponents';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <HeaderBar darkMode={darkMode}>
      <HeaderText darkMode={darkMode} onClick={toggleDarkMode}>
        rolandovlz
      </HeaderText>
    </HeaderBar>
  )
}

export default Header