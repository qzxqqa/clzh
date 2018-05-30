import React, {Component} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import ZhDetail from './ZhDetail'
import ZhOrder from './ZhOrder'
import Complete from './Complete'

import '../style/common.less'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/'   component={Home} />
                    <Route path='/zhDetail' component={ZhDetail} />
                    <Route path='/zhOrder'  component={ZhOrder} />
                    <Route path='/complete'  component={Complete} />
                </Switch>
            </HashRouter>
        );
    }
}

export default App