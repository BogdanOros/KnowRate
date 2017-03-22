import React from 'react';
import HamburgerMenu from 'react-hamburger-menu'

class HeaderMobile extends React.Component {

    render() {
        var mobileList = this.props.isOpen ? <DropDownHeader /> : null;
        return (
            <div className="mobile">
                <DropDownMenu isOpen={this.props.isOpen} 
                              setOpenedState={this.props.setOpenedState}/>
                 {mobileList}
            </div>
        );
    }
}

const DropDownMenu = (props) => {
    return (
         <HamburgerMenu
            isOpen={props.isOpen}
            menuClicked={()=> props.setOpenedState({open: !props.isOpen}) }
            width={18}
            height={15}
            strokeWidth={2}
            rotate={0}
            color='#a09f9f'
            borderRadius={0}
            animationDuration={0.5}
        />
    );
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

export default HeaderMobile;