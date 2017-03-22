import React from 'react';

import HamburgerMenu from 'react-hamburger-menu'

import HeaderDesktop from './header-full/header.full.component';

import './header.style.sass';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }
    render() {
         var contentClassName;
         if (!this.state.open) {
             contentClassName = "Header";
         } else {
             contentClassName = "Header header-content-mobile";
         }

         var mobileList = null;
         if (this.state.open) {
             mobileList = <DropDownHeader />
         }

         return (
            <div className={contentClassName}>
                <div className="header-content">
                    <div className="logo-container">
                        <span className="header-title">Know-Rate</span>
                    </div>
                    {mobileList}
                    <div className="header-active-content">
                        <HeaderDesktop />
                        <div className="mobile">
                            <HamburgerMenu
                                isOpen={this.state.open}
                                menuClicked={()=>this.setState({open: !this.state.open})}
                                width={18}
                                height={15}
                                strokeWidth={2}
                                rotate={0}
                                color='#a09f9f'
                                borderRadius={0}
                                animationDuration={0.5}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const DropDownHeader = () => {
    return (
        <div>
           <ul>
                <li className="header-join header-join-mobile"><a>Log In</a></li>
                <li className="header-join header-join-mobile"><a>Join</a></li>
            </ul>
        </div>
    );
}

export default Header;