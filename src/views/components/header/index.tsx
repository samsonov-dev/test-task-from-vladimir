import React, { Component } from 'react';
import './index.scss';
import logo from '../../../assets/img/logo.png';
import avatar from '../../../assets/img/avatar.png';
import help from '../../../assets/img/icon/help.svg';

class Header extends Component  {
    render() {
        return (
            <div className="header">
                <nav className="navbar">
                    <div className="navbar__inner">
                        <div className="navbar__items">
                            <img src={logo} className="logo" alt="Logo" />
                        </div>
                        <div className="navbar__items navbar__items--right">
                            <button className="help">
                                <span>Help</span>
                                <img src={help} alt="" />
                            </button>
                            <button className="upgrade">upgrade</button>
                            <img src={avatar} className="avatar" alt="Avatar" />
                        </div>
                    </div>
                </nav>
                <div className="tabs">
                    <div className="tabs__inner">
                        <button className="tab active">Analyze</button>
                        <button className="tab">My campaigns</button>
                        <button className="tab">Configure</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
