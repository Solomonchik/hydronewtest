import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class TopNavigation extends Component {
    render() {
        return (
            <div className={'topNavigationContainer'}>
                <div className={'topNavigationSubContainer'}>
                    <h1 className="navBrand">XYZ</h1>
                    <ul>
                        <li><NavLink to={'/'}>link 1</NavLink></li>
                        <li><NavLink to={'/'}>link 2</NavLink></li>
                        <li className={'activeLink'}><NavLink to={'/'} >link 3</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopNavigation;