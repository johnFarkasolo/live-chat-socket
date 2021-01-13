import React from 'react';

import './UserInfo.scss'

const UserInfo = () => {
    return (
        <div className="user-info">
            <div className="name">ParamPamPam</div>
            <div className="status">
                <span className="circle" />В сети
            </div>
        </div>
    );
};

export default UserInfo;