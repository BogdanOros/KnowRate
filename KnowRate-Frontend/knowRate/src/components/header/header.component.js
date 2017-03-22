import React from 'react';

import HeaderDesktop from './header-full/header.full.component';
import HeaderMobile from './header-mobile/header.mobile.component';

import './header.style.sass';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    getContentClassName = () => {
        return !this.state.open ? "Header" : "Header header-content-mobile";
    }

    render() {
         var contentClassName = this.getContentClassName();
         return (
            <div className={contentClassName}>
                <div className="header-content">
                    <div className="logo-container">
                        <span className="header-title">Know-Rate</span>
                    </div>
                    <div className="header-active-content">
                        <HeaderDesktop />
                        <HeaderMobile isOpen={this.state.open} 
                                      setOpenedState={(state) => { this.setState(state); }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;