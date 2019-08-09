import React, {Component} from 'react';
import TopNavigation from './components/TopNavigation'
import {NavLink} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className={'startPageContainer'}>
                <TopNavigation/>
                <div className={'contentContainer'}>
                    <div className={'textContainer'}>
                        <p className={'paragraphFromTextContainer'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor earum enim error illum,
                            laborum natus, nulla odit quis temporibus totam ut vel veritatis voluptatem?
                        </p>
                        <NavLink to={'#'}>And something more</NavLink>
                    </div>
                    <div className={'inputsContainer'}>
                        <h2>Lorem ipsum dolor sit amet.</h2>
                        <p className={'paragraphFromInputsContainer'}>And something more</p>
                        <input type="text" placeholder={'Write something'} className={'inputOne'}/>
                        <textarea placeholder={'Write something more'} className={'inputTwo'}/>
                        <button className={'submitButton'}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;