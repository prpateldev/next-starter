import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Roster from './Roster';

export default class RouterApp extends Component {

    render() {
        return <div>
            <h4>Router App</h4>

            <Switch>
                <Route exact path='/nossr/' component={Home}/>
                <Route path='/nossr/roster' component={Roster}/>
            </Switch>
            <nav>
                <ul>
                    <li><Link to='/nossr/'>Home</Link></li>
                    <li><Link to='/nossr/roster'>Roster</Link></li>
                </ul>
            </nav>
        </div>
    }

}
