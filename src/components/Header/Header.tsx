import React from 'react';
import UserInfo from "./UserInfo/UserInfo";

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <UserInfo />
        </div>
    );
};

export default Header;