import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import router from './router';
import TabBarList from '../components/TabBarList';

class RouterIndex extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={TabBarList}></Route>
                <div>
                    <Switch>
                        {
                            router.map((route, index) => {
                                return (<Route key={index} path={route.path} exact={route.exact} component={route.component} />)
                            })
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default RouterIndex;