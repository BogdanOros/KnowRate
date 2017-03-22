import React from 'react';
// Semantic UI Imports
import { Input } from 'semantic-ui-react';

import './header.full.style.sass';

class HeaderDesktop extends React.Component {
    render() {
        return (
            <div className="fullscreen-header-content">
                <ul>
                    <SearchBar />
                    <li className="header-join"><a>Log In</a></li>
                    <li className="header-join"><a>Join</a></li>
                </ul>
             </div>
        );
    }
}

const SearchBar = () => {
    return (
        <li className="header-join">
            <div className="search-container">
                <Input className="header-search" icon='search'
                       iconPosition='left' placeholder='Search...' />
            </div>
        </li>
    )
}

export default HeaderDesktop;